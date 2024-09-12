export default function Slots({ val1, val2, val3 }) {
    const test = (val1 === val2 && val2 === val3);
    return (
        <div>
            <h2>-- VARIABLES --</h2>
            <p>{val1}{val2}{val3}</p>
            <p>{test ? 'ITS A MATCH!!' : 'AWW IT FAILED!'}</p>
        </div>
    )
}