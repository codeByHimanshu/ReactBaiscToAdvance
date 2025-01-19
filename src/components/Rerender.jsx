import { useState } from "react";

export default function Rerender() {
  return (
    <>
    <ButtonWithTittle />
      <MyButton title={"himanshu1"} />
      <MyButton title={"himanshu2"} />
      <MyButton title={"himanshu2"} />
      <MyButton title={"himanshu2"} />
      <MyButton title={"himanshu2"} />
    </>
  );

  function ButtonWithTittle() {
    const [title, setTitle] = useState("value");
    function updateTitle(params) {
      setTitle(title + Math.random());
    }
    return (
      <div>
        <button onClick={updateTitle}>click</button>
        <MyButton title={title} />
      </div>
    );
  }

  function MyButton({ title }) {
    return <div>{title}</div>;
  }
}
