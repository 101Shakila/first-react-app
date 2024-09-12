export default function ColorList({ colors }) {
    const lis = colors.map((c) => <li style={{ color: c }}>{c}</li>);

    return (
        <div>
            <h1>Color List</h1>
            <ul>
                {lis}
            </ul>
        </div>
    )
}