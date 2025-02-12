import React, { useState } from "react";

export default function Assignment1() {
    const [input, setInput] = useState(0);
    const [fact, setFact] = useState(1);

    const calculateFact = (n) => {
        if (n < 0) return "Invalid input"; 
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
        console.log('fact fun rendered');
        
    };
    console.log('fact fun rendered');
    return (
        <>
            <input
                type="number"
                placeholder="Enter number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <button onClick={() => setFact(calculateFact(input))}>
                Calculate Factorial
            </button>
            <div>Factorial is: {fact}</div>
        </>
    );
}
