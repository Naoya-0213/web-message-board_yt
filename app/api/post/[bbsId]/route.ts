import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  request: Request,
  { params }: { params: { bbsId: string } }
) {
  //   params.bbsId はURLから受け取るID
  const bbsId = params.bbsId;
  //   prisma.post.findUnique で該当データを1件取得
  const bbsDetailData = await prisma.post.findUnique({
    where: {
      id: parseInt(bbsId),
    },
  });
  //   クライアントに対して、データを JSON形式で返す
  return NextResponse.json(bbsDetailData);
}

// このファイルの機能 ====================================================

// これは Next.js（App Router）の GET リクエスト用のハンドラー。
// このファイル自体が /api/post/[bbsId] という 動的ルートのAPIエンドポイントになってる。

// 🔄 ざっくり流れ図
// 	1.	/api/post/5 にアクセスされる
// 	2.	params.bbsId → "5"
// 	3.	parseInt("5") → 5
// 	4.	DBから id: 5 の投稿を取得
// 	5.	その投稿を JSON で返す
