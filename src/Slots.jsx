export default function Slots({ val1, val2, val3 }) {
    const test = (val1 === val2 && val2 === val3);
    const color = { color: test ? 'green' : 'red' }
    const hiddentest = test ? false : true
    return (
        <div>
            <h2>.MATCHING GAME.</h2>
            <p>{val1}{val2}{val3}</p>
            <p style={color}>{test ? 'ITS A MATCH!!' : 'AWW IT FAILED!'}</p>
            <h3 hidden={hiddentest}>CONGRATS YOU WON!</h3>
        </div >
    )
}