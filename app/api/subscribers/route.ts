import { NextRequest, NextResponse } from "next/server";
import { db, Subscriber } from "@/lib/db";
import { requireAdmin, unauthorized } from "@/lib/middleware";

export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  return NextResponse.json(await db.getSubscribers());
}

export async function POST(req: NextRequest) {
  const data: Subscriber = await req.json();
  await db.addSubscriber(data);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!requireAdmin(req)) return unauthorized();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  await db.deleteSubscriber(id);
  return NextResponse.json({ success: true });
}
