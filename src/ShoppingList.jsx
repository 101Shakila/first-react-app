export default function ShoppingList({ list }) {
    return (
        <div>
            <ul>
                {
                    list.map(i => <li style={{ textDecoration: i.completed ? 'line-through' : 'none' }}>
                        {i.item} -: {i.quantity}</li>)
                }
            </ul>
        </div >
    )
}