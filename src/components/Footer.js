import { useState } from 'react'
import '../style/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('Entrez votre email ici');

    function checkEmail(value) {
        if (!value.includes("@")) {
            alert("Erreur : Le champ ne contient pas le caractère '@', ce n'est pas une adresse mail valide");
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <form>
                <input type="email" placeholder={ inputValue } onBlur={(e) => checkEmail(e.target.value) } />
            </form>
		</footer>
	)
}

export default Footer
