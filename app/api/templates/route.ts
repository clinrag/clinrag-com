import { NextRequest, NextResponse } from "next/server";
import { db, Template } from "@/lib/db";
import { requireAdmin, unauthorized } from "@/lib/middleware";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  return NextResponse.json(await db.getTemplates());
}

export async function POST(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  const data: Template = await req.json();
  await db.addTemplate(data);
  return NextResponse.json({ success: true });
}

export async function PUT(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  const data: Template & { id: string } = await req.json();
  await db.updateTemplate(data.id, data);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  await db.deleteTemplate(id);
  return NextResponse.json({ success: true });
}
