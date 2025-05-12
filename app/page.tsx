import BBSCardList from "@/components/components/BBSCardList";
import type { BBSdata } from "./types/types";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  const bbsAllData: BBSdata = await response.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAlldata = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAlldata={bbsAlldata} />
    </main>
  );
}
