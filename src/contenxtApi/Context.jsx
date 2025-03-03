import { useState } from "react";

export default function Context() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} setCount={setCount} />
    </>
  );
}
function Count({ count, setCount }) {
  return (
    <div>
      <RenederCount count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}
function RenederCount({ count }) {
  console.log(count);

  return <div> count is : {count}</div>;
}
function Buttons({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
}
