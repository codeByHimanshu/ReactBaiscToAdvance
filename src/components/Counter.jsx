import { useState } from "react"

const Counter = ()=>{
const [count, setCount] = useState(0)
 return(
    <div>

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