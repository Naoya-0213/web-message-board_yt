import type { BBSData } from "@/app/types/types";
import React from "react";

async function getDetailBBSData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData: BBSData= await response.json();

  return bbsAllData;
}

const BBSDetailPage = () => {
  return <div>BBSDetailPage</div>;
};

export default BBSDetailPage;
