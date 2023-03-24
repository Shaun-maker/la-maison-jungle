import { plantList } from '../datas/plantList';
import '../style/ShoppingList.css'

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
            <ul className='lmj-plant-list'>
                {
					plantList.map((plant, index) => (
						<li key={`${plant.id}`} className='lmj-plant-item'>
                            { plant.name }
                            { plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        </li>
					))
				}
            </ul>
        </div>
    )
}

export default ShoppingList;