import '../style/PlantItem.css'

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3];

    const scaleType = careType === 'light' ? '/src/assets/sun.svg' : '/src/assets/water.svg';

    return (
        <div>
            {range.map(
                (rangeElement) => scaleValue >= rangeElement ?
                    <img key={rangeElement.toString()} src={scaleType} alt='Care scale' /> : null
            )}
        </div>
    )
}

function PlantItem({name, cover, id, light, water}) {
    return (
        <li className='lmj-plant-item' key={id}>
            <img className='lmj-plant-item-cover' src={cover} alt={ name }/>
            { name }
            <CareScale careType='light' scaleValue={light} />
            <CareScale careType='water' scaleValue={water} />
        </li>
    )
}

export default PlantItem;