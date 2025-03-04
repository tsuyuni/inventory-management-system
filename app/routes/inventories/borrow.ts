import { createRoute } from "honox/factory";

export const POST = createRoute(async (c) => {
  console.log(await c.req.parseBody());

  return c.redirect("/");
});
