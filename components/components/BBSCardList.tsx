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
import BBSCard from "./BBSCard";
import type { BBSdata } from "@/app/types/types";

interface BBSAllDataProps {
  bbsAllData: BBSdata[];
}

const BBSCardList = ({ bbsAlldata }: BBSAllDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAlldata.map((bbsData: BBSdata) => (
        <BBSCard key={bbsData.id} bbsData={bbsData}/>
      ))}
    </div>
  );
};

export default BBSCardList;
