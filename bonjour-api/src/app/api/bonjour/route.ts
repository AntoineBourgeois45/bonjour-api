import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const prenom = request.nextUrl.searchParams.get("prenom");
  if (!prenom) {
    return NextResponse.json(
      { message: "Bonjour ! Je ne connais pas votre prénom." },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { message: `Bonjour ${prenom} !` },
    { status: 200 }
  );
}
