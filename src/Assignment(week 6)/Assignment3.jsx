import { useMemo, useState } from "react";

export default function Assignment3() {
  const [items, setItems] = useState([
    { name: "potato", price: 20 },
    { name: "tomato", price: 20 },
    { name: "pasta", price: 20 },
  ]);
  const TotalAmount = useMemo(() => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total = total + items[i].price;
    }
    return total;
  }, [items]);

  return (
    <>
      {items.map((index) => (
        <div>
          <table>
            <tr>
              <td>
                {index.name} , {index.price}
              </td>
            </tr>
          </table>
        </div>
      ))}
      <div>TotalAmount : {TotalAmount}</div>
    </>
  );
}
