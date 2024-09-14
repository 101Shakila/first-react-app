export default function ShoppingItem({ list }) {
    return (
        <div>
            <ul>
                {
                    list.map(i => <li key={i.id} style={{
                        color: i.completed ? 'red' : 'green',
                        textDecoration: i.completed ? 'line-through' : 'none'
                    }}>
                        {i.item} -: {i.quantity}</li>)
                }
            </ul>
        </div >
    )
}