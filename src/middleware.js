'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard' || request.nextUrl.pathname==='/pages/register' || request.nextUrl.pathname==='/pages/alter') {
            return NextResponse.redirect(urlLogin);
            console.log("Página indisponível");
        }
    }
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/register','/pages/alter']
};

