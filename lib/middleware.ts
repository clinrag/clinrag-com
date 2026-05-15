import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function requireAdmin(req: NextRequest) {
  const token = req.cookies.get("admin-token")?.value;
  if (!token) return false;
  return verifyToken(token) !== null;
}

export function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
