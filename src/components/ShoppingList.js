import { plantList } from '../datas/plantList'
import '../style/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList({ cart, updateCart }) {
    const categories = plantList.reduce(
        (accumulator, currentValue) =>
            accumulator.includes(currentValue.category) ? accumulator : accumulator.concat(currentValue.category),
        []
    )
    return (
        <div className='basis-80'>
            <ul>
                { categories.map((category, index) => (
					<li key={`${category}-${index}`}>{ category }</li>
				)) }
            </ul>
            <ul className='lmj-plant-list'>
                {
					plantList.map((plant) => (
                        <div key={plant.id}>
                            <PlantItem name={plant.name} cover={plant.cover} light={plant.light} water={plant.water} />
                            <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                        </div>
					))
				}
            </ul>
        </div>
    )
}

export default ShoppingList;