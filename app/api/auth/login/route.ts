import { NextRequest, NextResponse } from "next/server";
import { signToken, ADMIN_CREDENTIALS } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    const token = signToken({ id: "admin", role: "admin" });
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return res;
  }

  return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
}
