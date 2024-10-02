import { useState } from "react"
import { v4 as uuid } from "uuid"

export default function EmojiCall() {
    const [emojis, Setemojis] = useState([{ id: uuid(), emoji: "😍" }]);


    const addEmoji = () => {
        Setemojis((oldEmoji) => [...oldEmoji, { id: uuid(), emoji: "🥹" }]);
    }

    return (
        <div>
            <h1>Emoji List</h1>

            {emojis.map((e) => (<span key={e.id}>{e.emoji}</span>))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}