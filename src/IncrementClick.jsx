export default function IncrementClick() {
    let num = 0;
    const numIncrease = () => {
        num = num + 1;
    }
    return (
        <div>
            <p>Count is : {num}</p>
            <button onClick={numIncrease}>CLICK ME TO INCREASE</button>
        </div>
    )
}