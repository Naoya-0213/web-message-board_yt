import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET(request: Request) {
  const allBBSPosts = await prisma.post.findMany();
  return NextResponse.json(allBBSPosts);
}

// Create Postにて 投稿クリック時の実装
export async function POST(request: Request) {
  const { username, title, content } = await request.json();

  const Post = await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  });
  return NextResponse.json(Post);
}
