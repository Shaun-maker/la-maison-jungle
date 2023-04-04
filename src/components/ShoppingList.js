import { plantList } from '../datas/plantList'
import '../style/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'

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

    const [category, setCategory] = useState("toutes");
    function filterPlantList(plantList, category) {
        if (category === "toutes") {
            return plantList;
        }
        else {
            let filteredPlantList = [];
            for (let i = 0; i < plantList.length; i++) {
                if (plantList[i].category === category) {
                    filteredPlantList.push(plantList[i]);
                }
            }
            return filteredPlantList;
        }
    }
    let filteredPlantList = filterPlantList(plantList, category);

    return (
        <div className='basis-80'>
            <Categories category={ category } setCategory={ setCategory } />
            <ul className='lmj-plant-list'>
                {
					filteredPlantList.map(({ id, cover, name, water, light, price }) => (
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