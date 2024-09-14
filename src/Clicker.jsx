function buttonClicker() {
    console.log("OMG YOU CLICKED!");
}

export default function Clicker() {

    return (
        <div>
            <h1>Click the Button!</h1>
            <button onClick={buttonClicker}>Button</button>
        </div>
    )


}