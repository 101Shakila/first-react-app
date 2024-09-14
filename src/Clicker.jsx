function buttonClicker() {
    console.log("OMG YOU CLICKED!");
}

function hoverMe() {
    console.log("OMG YOU HOVERED!");
}

export default function Clicker() {

    return (
        <div>
            <h1>Click the Button!</h1>
            <button onClick={buttonClicker}>Button</button>
            <h1>Hover Over me</h1>
            <h2 onMouseOver={hoverMe}>hover</h2>
        </div>
    )


}