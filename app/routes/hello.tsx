import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(<h1>Hello, World!</h1>);
});

export const POST = createRoute((c) => {
  return c.json({ message: "Hello, World!" });
});
