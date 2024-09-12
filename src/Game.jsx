export default function Game({ values }) {
    const num1 = Math.floor(Math.random() * 5);
    const num2 = Math.floor(Math.random() * 5);
    let results = num1 === num2 ? "you win" : "you lose!";
    const styles = { color: num1 === num2 ? "green" : "red" };

    if (results) {
        return (
            //This will render the details based on the condition above.
            <div style={styles}>
                <p>{results}</p>

                <p>Number1 : {num1}</p>
                <p>Number1 : {num2}</p>
            </div>

        );
    }
}