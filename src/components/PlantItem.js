import CareScale from './CareScale'
import '../style/PlantItem.css'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

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