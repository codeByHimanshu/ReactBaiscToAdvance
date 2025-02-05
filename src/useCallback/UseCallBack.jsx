import { memo, useCallback, useState } from "react";

export default function UseCallBack(params) {
    const [counter, setCounter] = useState(0);


 const InputFun = useCallback(() => {
    console.log("input function");
  },[]);

  return (
    <div>
      <h1>UseCallBack</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment:{counter}
      </button>
      <Child Val={InputFun} />
    </div>
  );

  
}
const Child = memo(({ Val }) => {
    console.log("child component");
    return (
      <div>
        <button>clicked</button>
      </div>
    );
  });