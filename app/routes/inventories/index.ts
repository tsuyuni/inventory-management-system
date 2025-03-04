import { createRoute } from "honox/factory";
import prismaClient from "../../utils/prismaClient";

// 備品追加
export const POST = createRoute(async (c) => {
  const { name } = await c.req.parseBody<{ name: string }>();

  const inventory = await prismaClient.inventory.create({
    data: {
      name,
      status: "IN_STOCK",
    },
  });

  console.log(inventory.id);

  return c.redirect("/");
});
