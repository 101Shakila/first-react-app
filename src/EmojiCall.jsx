import { useState } from "react"
import { v4 as uuid } from "uuid"

export default function EmojiCall() {
    const [emojis, Setemojis] = useState([{ id: uuid(), emoji: "😍" }]);


    const addEmoji = () => {
        Setemojis((oldEmoji) => [...oldEmoji, { id: uuid(), emoji: "🥹" }]);
    }

    const deleteEmoji = (id) => {
        Setemojis((prevEmoji) => {
            return prevEmoji.filter((emojis) => emojis.id !== id);
        })
    }

    return (
        <div>
            <h1>Emoji List</h1>

            {emojis.map((e) => (<span onClick={() => deleteEmoji(e.id)} key={e.id}>{e.emoji}</span>))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}