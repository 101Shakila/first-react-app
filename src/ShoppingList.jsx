export default function ShoppingList({ list }) {
    return (
        <div>
            <ul>
                {
                    list.map(i => <li>{i.item} -: {i.quantity}</li>)
                }
            </ul>
        </div>
    )
}