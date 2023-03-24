import logo from '../assets/leaf.png';
import '../style/Banner.css';

function Banner() {
    const title = "La maison jungle";
    return (
    <div className='lmj-banner'>
        <img className='lmj-logo' src={logo} alt='La maison jungle - Logo' />
        <h1 className='lmj-title'>{ title }</h1>    
    </div>);
}

export default Banner;