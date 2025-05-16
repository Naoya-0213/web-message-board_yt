import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET(request: Request) {
  try {
    const allBBSPosts = await prisma.post.findMany();
    return NextResponse.json(allBBSPosts);
  } catch (error) {
    console.error("🔥 APIエラー:", error); // ここでログを確認
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}