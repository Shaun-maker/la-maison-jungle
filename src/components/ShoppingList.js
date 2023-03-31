import { plantList } from '../datas/plantList'
import '../style/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'

function ShoppingList({ cart, updateCart }) {
    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name);
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            );
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1}
            ])
        }
        else {
            updateCart([...cart, { name, price, amount: 1}]);
        }
    }

    return (
        <div className='basis-80'>
            <Categories />
            <ul className='lmj-plant-list'>
                {
					plantList.map(({ id, cover, name, water, light, price }) => (
                        <div key={id}>
                            <PlantItem 
                                name={name} 
                                cover={cover} 
                                light={light} 
                                water={water}
                                price={price} 
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
					))
				}
            </ul>
        </div>
    )
}

export default ShoppingList;