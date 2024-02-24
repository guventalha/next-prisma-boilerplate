import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const events = await prisma.event.findMany();
  return NextResponse.json(events);
}

export async function POST(request: Request) {
  const json = await request.json();
  prisma.event.create({ data: json });

  return new NextResponse("Event created", { status: 201 });
}
