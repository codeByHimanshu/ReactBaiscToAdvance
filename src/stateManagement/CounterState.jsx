import { useRecoilValue, useRecoilState,RecoilRoot } from "recoil";
import { countAtom } from "./Store/Count";

export default function () {
  return <>
  <RecoilRoot>
    <Counter />
  </RecoilRoot>
  </>;

function Counter() {
  
return <div>
<RenderCount />
  <Buttons />
</div>

}


function RenderCount() {
    const count = useRecoilValue(countAtom)
    return <div>
        <h1>count is {count}</h1>
    </div>
}


  function Buttons() {
    const [count,setCount] = useRecoilState(countAtom)
    return (
      <div>
        <button
          onClick={() => {
            setCount(count+ 1);
          }}
        >
          increament counter
        </button>
        <button
          onClick={() => {
            setCount(count -1);
          }}
        >
          decrease counter
        </button>
      </div>
    );
  }
}
