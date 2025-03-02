import { createRoute } from "honox/factory";
import Input from "../islands/input";
import Button from "../islands/button";
import Dialog from "../islands/dialog";

export default createRoute((c) => {
  return c.render(
    <Dialog title="備品追加">
      <form action="/inventories" method="post" class="flex flex-col gap-6 p-3">
        <h1>備品追加</h1>
        <Input title="備品名" />
        <div class="flex gap-3">
          <Button type="submit" title="追加" />
        </div>
      </form>
    </Dialog>
  );
});
