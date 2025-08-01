import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret");
	const path = request.nextUrl.searchParams.get("path");

	if (secret !== process.env.APPLICATION_SECRET) {
		return NextResponse.json({
			message: `Invalid secret`,
		});
	}

	if (!path) {
		return NextResponse.json({
			revalidated: false,
			now: Date.now(),
			message: "Missing path to revalidate",
		});
	}

	revalidatePath(path);
	return NextResponse.json({ revalidated: true, now: Date.now() });
}
