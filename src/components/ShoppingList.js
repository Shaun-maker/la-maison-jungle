import { plantList } from '../datas/plantList'
import '../style/ShoppingList.css'
import PlantItem from './PlantItem'

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
					plantList.map((plant) => (
                        <PlantItem name={plant.name} cover={plant.cover} key={plant.id} light={plant.light} water={plant.water} />
					))
				}
            </ul>
        </div>
    )
}

export default ShoppingList;