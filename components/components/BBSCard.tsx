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

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quia
        asperiores vero fuga ipsam. Optio provident vel debitis nulla ex
        deleniti eos, dolor, consequatur, laudantium beatae alias consectetur
        aliquid tempora.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link rel="stylesheet" href={"/bbs-posts/1"} className="text-blue-500">
          Read More
        </Link>
      </CardFooter>
    </Card>

 
  );
};

export default BBSCard;
