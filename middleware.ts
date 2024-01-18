import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ROUTES = {
  protected: ['/'],
  auth: ['/login']
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie = request.cookies.get('userSession')
  if(ROUTES.auth.includes(request.nextUrl.pathname) && cookie) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if(ROUTES.protected.includes(request.nextUrl.pathname) && !cookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
}


