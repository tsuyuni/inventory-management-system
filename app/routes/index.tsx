import { createRoute } from "honox/factory";
import prismaClient from "../utils/prismaClient";

export default createRoute(async (c) => {
  const inventories = await prismaClient.inventory.findMany();

  return c.render(
    <form action="/inventories/borrow" method="post">
      <h1>備品一覧</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>備品名</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => {
            return (
              <tr key={inventory.id}>
                <td class="px-2">
                  <input type="checkbox" name={`inventory-${inventory.id}`} />
                </td>
                <td class="px-2">{inventory.id}</td>
                <td class="px-2">{inventory.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="submit">削除</button>
    </form>
  );
});
