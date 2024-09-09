export default function Game({ values }) {
    const num1 = Math.floor(Math.random() * 5);
    const num2 = Math.floor(Math.random() * 5);

    return (

        <div>
            <p>Number1 : {num1}</p>
            <p>Number1 : {num2}</p>
        </div>
    );
}