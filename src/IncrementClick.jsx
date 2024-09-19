import { useState } from "react";

export default function IncrementClick() {

    const [num, setNum] = useState(0);

    //arrow function to increase value
    const numIncrease = () => {
        setNum(num + 1);
        console.log(num);
    }



    return (
        <div>
            <p>Count is : {num}</p>
            <button onClick={numIncrease}>CLICK ME TO INCREASE</button>
        </div>
    )
}