import "../src/config/env.js";
import prisma from "../src/config/prisma.js";
import { Role } from "@prisma/client";
import { faker } from "@faker-js/faker";


async function seed() {
  console.log("Data Adding started")

  const users = await Promise.all(
    Array.from({ length: 10 }).map(() =>
      prisma.user.create({
        data: {
          email: faker.internet.email().toLowerCase(),
          name: faker.person.fullName(),
          role: Role.USER,
        },
      })
    )
  )


  console.log("Users Created");



  const clubs = await Promise.all(
    Array.from({ length: 3 }).map(() =>
      prisma.club.create({
        data: {
          name: faker.company.name() + " Club",
          city: faker.location.city(),
          verified: faker.datatype.boolean(),
        },
      })
    )
  );

  console.log("Club Created");

  const events = [];
  for (const club of clubs) {
    const eventCount = faker.number.int({ min: 1, max: 3 });

    for (let i = 0; i < eventCount; i++) {
      const event = await prisma.event.create({
        data: {
          clubId: club.id,
          title: faker.music.genre() + " Night",
          date: faker.date.soon({ days: 30 }),
        },
      });

      events.push(event);
    }
  }

  console.log("events Created")

  const passTypes = [];
  for (const event of events) {
    const types = [
      { name: "General Entry", price: 999 },
      { name: "Couple Entry", price: 1999 },
      { name: "VIP Entry", price: 3999 },
    ];

    for (const type of types) {
      const passType = await prisma.passType.create({
        data: {
          eventId: event.id,
          name: type.name,
          price: type.price,
          capacity: faker.number.int({ min: 50, max: 200 }),
        },
      });

      passTypes.push(passType);
    }
  }

  const orders = [];
  for (let i = 0; i < 15; i++) {
    const user = faker.helpers.arrayElement(users);
    const passType = faker.helpers.arrayElement(passTypes);

    const order = await prisma.order.create({
      data: {
        userId: user.id,
        passTypeId: passType.id,
        qrPass: {
          create: {
            used: faker.datatype.boolean({ probability: 0.2 }),
          },
        },
      },
      include: {
        qrPass: true,
      },
    });

    orders.push(order);


    if (order.qrPass.used) {
      await prisma.scanLog.create({
        data: {
          qrPassId: order.qrPass.id,
        },
      });
    }
  }

  console.log("orders with QR passes");

  console.log("completed successfully");
}

seed()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });