export default function Game({ values }) {
    const num1 = Math.floor(Math.random() * 5);
    const num2 = Math.floor(Math.random() * 5);
    let results = num1 === num2 ? "you win" : "you lose!";
    if (results) {
        return (

            <div>
                <p>{results}</p>

                <p>Number1 : {num1}</p>
                <p>Number1 : {num2}</p>
            </div>

        );
    }
}