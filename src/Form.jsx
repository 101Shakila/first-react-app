function handleForm() {
    console.log("HANLDING FORMMMSS!");
}


export default function Form() {

    return (
        <form onSubmit={handleForm}>
            <button>Submit</button>
        </form>
    )
}