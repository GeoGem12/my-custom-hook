import { useState } from "react";

export const useCounter = (inicialState = 10) => {

    const [counter, setstate] = useState(inicialState)

    const increment = () => {
        setstate(counter + 1);
    }

    const decrement = () => {
        setstate(counter - 1);
    }

    const reset = () => {
        setstate(inicialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
