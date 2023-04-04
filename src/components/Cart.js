import { useState, useEffect } from 'react'
import '../style/Cart.css'

function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true);
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price, 0
	);

	function removeToCart (name) {
		for (const plant of cart) {
			if (plant.name === name) {
				plant.amount = 0;
			}
		}
		let cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
		);
		updateCart([...cartFilteredCurrentPlant]);
	}

	useEffect(() => {
		let jsonCart = JSON.stringify(cart);
		localStorage.setItem("cart", jsonCart);
	}, [cart]);

	useEffect(() => {
		document.title = `LMJ : ${total} € d'achats`
	}, [total]);

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<ul>
				{
					cart.map(({ name, price, amount}, index) => (
						<div  className='lmj-cart-list'
							key={`${ name }-${ index }`}>
							{ name } { price }€ x { amount }
							<button onClick={() => removeToCart(name)}>Supprimer</button>
						</div>
					))
				}
			</ul>
			<h3>Total : { total }€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart;