import { useRecoilValue } from "recoil";
import { countAtom } from "./Store/Count";

export default function () {
  return <>hiin there</>;




function RenderCount() {
    const count = useRecoilValue(countAtom)
    return <div>
        <h1>count is {count}</h1>
    </div>
}


  function Buttons() {
    return (
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increament counter
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          decrease counter
        </button>
      </div>
    );
  }
}
