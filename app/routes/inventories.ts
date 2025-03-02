import { createRoute } from "honox/factory";

export const POST = createRoute(async (c) => {
  console.log("inventory added");
  const { name } = await c.req.parseBody();
  console.log(name);

  return c.redirect("/");
});
