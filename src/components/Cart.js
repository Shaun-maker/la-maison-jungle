function Cart() {
    const priceMonstera = 8;
    const priceLierre = 10;
    const priceBouquet = 15;

    return (
        <div>
            <span>Panier</span>
            <ul>
                <li>Monstera : { priceMonstera } €</li>
                <li>Lierre : { priceLierre } €</li>
                <li>priceBouquet : { priceBouquet } €</li>
            </ul>
            <span>Total : { priceMonstera + priceLierre + priceBouquet } €</span>
        </div>
    )
}

export default Cart;