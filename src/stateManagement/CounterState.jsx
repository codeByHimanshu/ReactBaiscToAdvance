import { useRecoilValue, useSetRecoilState,RecoilRoot } from "recoil";
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

  return <div> count is  :
    {count}
    <EvenCount />
  </div>
   
}

function EvenCount() {
  const count = useRecoilValue(countAtom)

  if (count % 2 == 0) {
    return <div>
      <h3>
        it is even
      </h3>
    </div>
    
  }
  else{
    <div>
  </div>
  } 
}

  function Buttons() {
    const setCount = useSetRecoilState(countAtom)
    return (
      <div>
        <button
          onClick={() => {
            setCount(count => count+ 1);
          }}
        >
          increament counter
        </button>
        <button
          onClick={() => {
            setCount(count=>count -1);
          }}
        >
          decrease counter
        </button>
      </div>
    );
  }
}
