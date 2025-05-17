import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET(request: Request) {
  try {
    const allBBSPosts = await prisma.post.findMany();
    return NextResponse.json(allBBSPosts);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const allBBSPosts = await prisma.post.findMany();
    return NextResponse.json(allBBSPosts);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
