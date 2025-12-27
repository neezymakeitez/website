import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const host = request.headers.get("host")?.toLowerCase() ?? "";

    if (!host.startsWith("cc.")) {
        return NextResponse.next();
    }

    const pathname = request.nextUrl.pathname;
    const isPublicFile = /\.[^/]+$/.test(pathname);
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname === "/favicon.ico" ||
        isPublicFile
    ) {
        return NextResponse.next();
    }

    if (pathname === "/cc") {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/cc";
    url.search = "";
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ["/:path*"],
};
