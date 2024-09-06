export default function Greeter({ person, from }) {
    console.log(person);
    return (
        <h1>Hi There {person} --- from {from}</h1>
    )
}