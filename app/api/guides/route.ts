import { NextRequest, NextResponse } from "next/server";
import { db, Guide } from "@/lib/db";
import { requireAdmin, unauthorized } from "@/lib/middleware";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  return NextResponse.json(await db.getGuides());
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  const data: Guide = await req.json();
  await db.addGuide(data);
  return NextResponse.json({ success: true });
}

export async function PUT(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  const data: Guide & { id: string } = await req.json();
  await db.updateGuide(data.id, data);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  await db.deleteGuide(id);
  return NextResponse.json({ success: true });
}
