FROM caddy/caddy:2.10-alpine

COPY ./tooling/caddy/Caddyfile /etc/caddy/Caddyfile

CMD [ "caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile" ]
