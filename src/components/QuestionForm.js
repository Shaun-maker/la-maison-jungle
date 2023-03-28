import { useState } from 'react';



function QuestionForm()
{
    const [inputValue, setInputValue] = useState('Posez votre question ici');
    const isInputError = inputValue.includes('f');
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value);
        }
    }
    return(
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => console.log(inputValue)}>🚨 Alertez moi</button>
            {isInputError && (<div>Erreur : l'input contient la lettre f</div>)}
        </div>
    )
}

export default QuestionForm;