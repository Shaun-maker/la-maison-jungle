import '../style/PlantItem.css'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function handleClick(e) {
    console.log(e);
}

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3];

    const scaleType = careType === 'light' ? sun : water;

    return (
        <div>
            {range.map(
                (rangeElement) => scaleValue >= rangeElement ?
                    (<img key={rangeElement.toString()} src={scaleType} alt='Care scale icon' />) : null
            )}
        </div>
    )
}

function PlantItem({name, cover, id, light, water}) {
    return (
        <li className='lmj-plant-item' key={ id } onClick={ handleClick }>
            <img className='lmj-plant-item-cover' src={ cover } alt={ name } />
            { name }
            <CareScale careType='light' scaleValue={ light } />
            <CareScale careType='water' scaleValue={ water } />
        </li>
    )
}

export default PlantItem;