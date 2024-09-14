function handleForm() {
    console.log("HANLDING FORMMMSS!");
}


export default function Form() {

    return (
        <form onSubmit={handleForm}>
            <h2>FORM!</h2>
            <button>Submit</button>
        </form>
    )
}