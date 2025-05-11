import BBSCardList from "@/components/components/BBSCardList";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async function Home() {
  const response = await fetch("http://localhost:3002/api/post", {
    cache: "no-store",
  });

  const bbsAllData = await response.json();
  console.log(bbsAllData);

  return (
    <main>
      <BBSCardList />
    </main>
  );
}
