import { hash } from "bcrypt";
import { events } from "../data/events";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hash("test", 10);
  await prisma.user.create({
    data: {
      email: `test@test.com`,
      name: "Test User",
      role: "USER",
      password: hashedPassword,
    },
  });

  await prisma.event.createMany({
    data: events,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
