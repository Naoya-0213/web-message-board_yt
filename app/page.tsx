import BBSCardList from "@/components/components/BBSCardList";
import { Prisma, PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export default function Home() {
  return (
    <main>
      <BBSCardList />
    </main>
  );
}

