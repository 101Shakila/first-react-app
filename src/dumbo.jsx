import { useState } from "react";

function generateGameBoard() {

    console.log('MAKING A COMPLICATED GAME');
    return Array(5000);
}

export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard());
    return <button>Click me to change state.</button>
}