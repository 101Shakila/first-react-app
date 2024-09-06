export default function Greeter(props) {
    console.log(props.person);
    return (
        <h1>Hi There {props.person}</h1>
    )
}