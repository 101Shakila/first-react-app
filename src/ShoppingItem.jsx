export default function ShoppingItem({ key, item, quantity, completed }) {
    let styles = {
        color: completed ? 'red' : 'green',
        textDecoration: completed ? 'line-through' : 'none'
    };
    return (


        <div>
            <ul>
                {
                    <li key={key} style={{ styles }}> {item} -: {quantity}</li>
                }
            </ul>
        </div >
    )
}



// {
//     list.map(i => <li key={i.id} style={{
//         color: i.completed ? 'red' : 'green',
//         textDecoration: i.completed ? 'line-through' : 'none'
//     }}>
//         {i.item} -: {i.quantity}</li>)
// }