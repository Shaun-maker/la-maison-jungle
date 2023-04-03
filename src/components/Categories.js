import { plantList } from '../datas/plantList'


function Categories({ category, setCategory }) {

    const listCategories = plantList.reduce(
        (accumulator, currentValue) =>
            accumulator.includes(currentValue.category) ? accumulator : accumulator.concat(currentValue.category),
        []
    )
    listCategories.unshift("toutes");

    return (
        <select>
        { listCategories.map((category, index) => (
            <option
                key={`${category}-${index}`}
                onClick={ () => setCategory( category )}
            >
                { category }
            </option>
        )) }
        </select>
    )
}

export default Categories