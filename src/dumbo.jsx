import { useState } from "react";


export default function Dumbo() {
    const [count, setCount] = useState(0);

    const addOne = () => {

        setCount(count + 1);
    };

    const addTwo = () => {

        setCount(count + 2);

    };


    const setTen = () => {
        setCount(10);
    };


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>ADD ONE</button>
            <button onClick={addTwo}>ADD TWO</button>
            <button onClick={setTen}>MAKE IT 10</button>
        </div>
    )
}