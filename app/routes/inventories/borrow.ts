import { createRoute } from "honox/factory";

export const POST = createRoute(async (c) => {
  const inventoriesToBorrow = Object.keys(await c.req.parseBody());
  console.log(inventoriesToBorrow);

  return c.redirect("/");
});
