import React, { useCallback, useMemo, useState } from "react";

export default function Assignment1() {
    const [input, setInput] = useState(0);
    const [fact, setFact] = useState(1);

    const calculateFact = useMemo(()=>{
        if (input < 0) return "Invalid input"; 
        let result = 1;
        for (let i = 1; i <= input; i++) {
            result *= i;
        }
        console.log('fact fun rendered');
        return result;
    },[input]) 
    return (
        <>
            <input
                type="number"
                placeholder="Enter number"
                onChange={(e) => setInput(Number(e.target.value))}
            />
         
            <div>Factorial is: {calculateFact}</div>
        </>
    );
}   