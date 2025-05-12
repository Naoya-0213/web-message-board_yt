import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import type { BBSdata } from "@/app/types/types";

interface BBSDataProps {
  bbsAllData: BBSdata[];
}

const BBSCard = ({ bbsData }: BBSDataProps) => {
  const { id,title, content, createdAt, username } = bbsData;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link
          rel="stylesheet"
          href={`/bbs-posts/${id}`}
          className="text-blue-500"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
