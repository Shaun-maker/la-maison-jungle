import '../style/PlantItem.css'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3];

    const scaleType = careType === 'light' ? sun : water;

    function alertCareScale(e) {
        let careTypeMessage;
        let scaleValueMessage;

        if (careType === 'light')
            careTypeMessage = 'de lumière';
        else
            careTypeMessage = "d'arrosage";
        
        if (scaleValue === 1)
            scaleValueMessage = 'peu';
        else if (scaleValue === 2)
            scaleValueMessage = 'modérement';
        else
            scaleValueMessage = 'beaucoup';

        console.log(`Cette plante requiert ${scaleValueMessage} ${careTypeMessage}`);
    }

    return (
        <div>
            {range.map(
                (rangeElement) => scaleValue >= rangeElement ?
                    (<img onClick={ alertCareScale } 
                        key={rangeElement.toString()} 
                        src={scaleType} 
                        test="hello" 
                        alt='Care scale icon' />)
                         : null
            )}
        </div>
    )
}

function PlantItem({name, cover, id, light, water}) {
    return (
        <li className='lmj-plant-item' key={ id }>
            <img className='lmj-plant-item-cover' src={ cover } alt={ name } />
            { name }
            <CareScale careType='light' scaleValue={ light } />
            <CareScale careType='water' scaleValue={ water } />
        </li>
    )
}

export default PlantItem;