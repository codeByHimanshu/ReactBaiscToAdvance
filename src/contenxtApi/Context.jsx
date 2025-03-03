import { useContext, useState } from "react";
import { CountContex } from "./exCount";


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
        <CountContex.Provider value={count} >

      <RenederCount />
      <Buttons setCount={setCount} />
        </CountContex.Provider>
    </div>
  );
}
function RenederCount() {
    const count = useContext(CountContex)
  return <div> count is : {count}</div>;
}
function Buttons({ setCount }) {
    const count = useContext(CountContex)
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
