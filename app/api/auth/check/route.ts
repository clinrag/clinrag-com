import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("admin-token")?.value;
  const user = token ? verifyToken(token) : null;
  return NextResponse.json({ authenticated: !!user });
}
