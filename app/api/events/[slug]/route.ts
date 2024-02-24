import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const event = await prisma.event.findUnique({ where: { slug: params.slug } });
  return NextResponse.json(event);
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const json = await request.json();
  const event = await prisma.event.update({
    where: { slug: params.slug },
    data: json,
  });
  return NextResponse.json(event);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const event = await prisma.event.delete({ where: { slug: params.slug } });
  return NextResponse.json(event);
}
