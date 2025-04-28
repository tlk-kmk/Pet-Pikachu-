import { NextResponse } from 'next/server';

export function middleware(req) {
    const res = NextResponse.next();

    // Set the Content Security Policy header dynamically
    res.headers.set(
        'Content-Security-Policy',
        "script-src 'self' https://cdn.jsdelivr.net https://unpkg.com;"
    );

    return res;
}