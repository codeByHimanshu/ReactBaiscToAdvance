import { useMemo, useState } from "react";
export default function InputSum(params) {
    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(0);
    
   let count = useMemo(()=>{
    let sum = 0;
            for(let i=1;i<=number;i++){
               sum = sum+i;   
        }
        return sum;
    },[number]);
    
    return(
        <>
        <input type="number" placeholder="enter number"
        onChange={(e)=>{
            setNumber(e.target.value);
        }} />
        <div>
            sum is :{count}
        </div>
        <button onClick={()=>{setCounter(counter+1)}}>
            counter is : {counter}
        </button>
        </>
    )
}