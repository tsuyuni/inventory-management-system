import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <form action="/inventories" method="post" class="flex flex-col items-center">
      <h1>備品追加</h1>
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm">
          備品名
        </label>
        <input
          type="text"
          name="name"
          id="name"
          class="border border-slate-300 focus-visible:outline-slate-400 rounded-md px-2 py-1"
        />
      </div>
      <button type="submit">追加</button>
    </form>
  );
});
