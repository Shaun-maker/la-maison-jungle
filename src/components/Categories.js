import { useState } from 'react'
import { plantList } from '../datas/plantList'


function Categories(categoriesProps) {
    const listCategories = plantList.reduce(
        (accumulator, currentValue) =>
            accumulator.includes(currentValue.category) ? accumulator : accumulator.concat(currentValue.category),
        []
    )
    listCategories.push("toutes");

        const [categories, setCategories] = useState("toutes");
        let categoriesProps.categories = categories;

    return (
        <select>
        { listCategories.map((category, index) => (
            <option key={`${category}-${index}`}>{ category }</option>
        )) }
        </select>
    )
}

export default Categories