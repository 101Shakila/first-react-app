import { useState } from "react";
import './ColorBox.css';

export default function ColorBox() {

    let colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#1ABC9C", "#E74C3C", "#34495E", "#2ECC71", "F39C12"];

    let randomIndex = Math.floor(Math.random() * 10);
    const [colorIndex, setColorIndex] = useState(randomIndex);

    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * 10);
        console.log(randomIndex);
        setColorIndex(randomIndex);

    }

    return (
        <div>
            <div className="ColorBox"
                style={{ backgroundColor: colors[colorIndex] }}
                onClick={changeColor}></div>
        </div>
    )


}