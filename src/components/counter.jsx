import { useState } from "react";

export default function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount((prev) => prev + 1)
    }

    const decrement = () => {
        setCount((prev) => prev - 1)
    }

    const restart = () => {
        setCount(0)
    }

    const switchSings = () => {
        setCount((prev) => prev * -1)
    }

    return (
        <>
            <h1>Count:</h1>
            <h1 data-testid="countNumber">{count}</h1>
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={restart}>restart</button>
                <button onClick={switchSings}>switchSings</button>
            </div>
        </>
    )


}