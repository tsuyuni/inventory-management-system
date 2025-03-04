import { createRoute } from "honox/factory";
import prismaClient from "../utils/prismaClient";
import { $Enums } from "@prisma/client";

const statusFactory = (status: $Enums.Status) => {
  if (status === "IN_STOCK") {
    return <p>在庫あり</p>;
  } else if (status === "OUT_OF_STOCK") {
    return "在庫なし";
  } else if (status === "IN_USE") {
    return "貸出中";
  } else {
    return "不明";
  }
};

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
            <th>状態</th>
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
                <td class="px-2">{statusFactory(inventory.status)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="submit">削除</button>
    </form>
  );
});
