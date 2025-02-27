import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Carrito from '../Carrito/carrito'
const Header = () =>

    <header className='header'>
        <Logo />
        <Navbar />
        <Carrito />
    </header>
    ;

export default Header;