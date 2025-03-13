import imgLogo from "../../assets/react.svg";
import CardWidget from "../CartWidget/CartWidget";
import '../Navbar/logo.css';
import './Navbar.css';
const objetoNav = [
    { itemEntrada: ["Inicio", "Nosotros", "Productos"] },
    { linkEntrada: ["#", "#", "#"] },
    { logo: imgLogo },
    { linkLogo: "#" }
]
const Navbar = () => {
    let [itemEntrada, linkEntrada, linkLogo] = objetoNav;
    let items = itemEntrada.itemEntrada;
    let links = linkEntrada.linkEntrada;
    return <>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href={linkLogo}>
                    <img className="logo" src={imgLogo} alt="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        {items.map((item, index) => {
                            return <li className='nav-item' key={index}>
                                <a className='nav-link' href={links[index]}>{item}</a>
                            </li>
                        }
                        )}
                    </ul>
                </div>
                <CardWidget />
            </div>
        </nav>
    </>

}

export default Navbar;