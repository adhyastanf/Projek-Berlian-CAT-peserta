// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  console.log(token);
  const homeUrl = new URL('/', request.url);

  // Cegah redirect ke home jika sudah di halaman home
  if (!token?.value?.noUjian && request.nextUrl.pathname !== homeUrl.pathname) {
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

// Tentukan halaman yang perlu dicek dan pengecualian
export const config = {
  matcher: [
    '/sesi/:path*', // Melindungi semua rute yang dimulai dengan /sesi
    '/((?!api|_next/static|_next/image|favicon.ico|public/|).*)', // Exclude certain routes and public directory
  ],
};
