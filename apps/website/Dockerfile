# syntax=docker/dockerfile:1

# Based on: https://turbo.build/repo/docs/guides/tools/docker

FROM node:24.0.0-alpine3.21 AS base

FROM base AS deps

RUN apk update
RUN apk add --no-cache libc6-compat

FROM base AS builder

RUN npm install -g turbo@^2
WORKDIR /app
COPY . .
RUN TURBO_GLOBAL_WARNING_DISABLED=true turbo prune @adviceonfire/website --docker

FROM base AS installer

RUN npm install -g turbo@^2
WORKDIR /app
RUN npm install --os=linux --libc=musl --cpu=x64 sharp
COPY --from=builder /app/out/json/ .
RUN npm ci
COPY --from=builder /app/out/full/ .
RUN --mount=type=secret,id=DOTENV_PRIVATE_KEY_PRODUCTION,env=DOTENV_PRIVATE_KEY_PRODUCTION turbo run build

FROM base AS runner

RUN apk add --no-cache curl
RUN curl -sfS https://dotenvx.sh/install.sh | sh

WORKDIR	/app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app/apps/website/.next/standalone ./apps/website
COPY --from=installer --chown=nextjs:nodejs /app/apps/website/.next/static ./apps/website/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/website/public ./apps/website/public
COPY --from=installer --chown=nextjs:nodejs /app/apps/website/.env.production ./apps/website/

CMD ["dotenvx", "run", "-f", "apps/website/.env.production", "--", "node", "apps/website/server.js"]
