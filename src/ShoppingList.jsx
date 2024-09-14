import ShoppingItem from "./ShoppingItem"

export default function ShoppingList({ list }) {
    return (
        <div>
            <ul>
                {
                    list.map(i => (
                        <ShoppingItem
                            key={i.id}
                            item={i.item}
                            quantity={i.quantity}
                            completed={i.completed}
                        />
                    ))
                }
            </ul>
        </div >
    )
}