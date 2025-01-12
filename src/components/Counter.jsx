import { useState } from "react"

const Counter = ()=>{
const [count, setCount] = useState(0)

function onclickHandle(){
    setCount(count+1)
  }

 return(
    <div>
        <button onClick={onclickHandle}>click me : {count}</button>
        <CustomButton   count={count} setCount={setCount}/>
    </div>
 )  

function CustomButton(props) {
    function onclickHandle(){
        setCount(count+1)
      }
    return(

        <button onClick={onclickHandle}>
            i am counter{props.count}
        </button>
    )
    
}

} 
export default Counter