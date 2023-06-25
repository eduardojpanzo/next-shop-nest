import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const token = searchParams.get("token");

  const cookieExpiresInSeconds = 60 * 60 * 24 * 7; //7days

  //   redicionar na pagina root da nossa url e guardar o token nos cookie
  const redirectURL = new URL("/", request.url);
  return NextResponse.redirect(redirectURL, {
    headers: {
      "set-Cookie": `${process.env.NEXT_PUBLIC_TOKEN_KEY}= ${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  });
}
