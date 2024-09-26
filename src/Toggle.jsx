import { useState } from "react";


export default function Toggle() {


    const [isHappy, setIsHappy] = useState(true);

    const changeHappy = () => {
        setIsHappy(!isHappy);
    }

    return (
        <div>
            <button className="Toggler" onClick={changeHappy}>{isHappy ? "🥲" : "🥰"}</button>
        </div>
    )
}