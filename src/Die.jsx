export default function Die({ numberSides }) {
    const roll = Math.floor(Math.random() * numberSides) + 1;
    return (
        <p>Sides : {numberSides} -- Die Roll : {roll}</p>
    )
}