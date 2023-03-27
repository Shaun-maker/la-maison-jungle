function handleSubmit(e)
{
    e.preventDefault();
    console.log(e.target["my_input"].value);
}

function QuestionForm()
{
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="my_input" defaultValue="Taper votre texte" />
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default QuestionForm;