import { plantList } from '../datas/plantList';

function ShoppingList() {
    const categories = plantList.reduce(
        (accumulator, currentValue) =>
            accumulator.includes(currentValue.category) ? accumulator : accumulator.concat(currentValue.category),
        []
    )
    return (
        <div>
            <ul>
                { categories.map((category, index) => (
					<li key={`${category}-${index}`}>{ category }</li>
				)) }
            </ul>
            <ul>
                {
					plantList.map((plant, index) => (
						<li key={`${plant.id}`}>{ plant.name }{ plant.isBestSale ? <span> 🔥</span> : null}</li>
					))
				}
            </ul>
        </div>
    )
}

export default ShoppingList;