import { useState } from "react"


export default function EmojiCall() {
    const [emojis, SetEmojis] = useState(["🥲"]);


    const addEmoji = () => {
        Setemojis((oldEmoji) => [...oldEmoji, ["😌"]]);
    }

    return (
        <div>
            <h1>Emoji List</h1>

            {emojis.map((e) => (<span >{e}</span>))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}