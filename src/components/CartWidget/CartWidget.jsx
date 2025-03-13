import { PiShoppingCartSimpleThin } from "react-icons/pi";
import './CartWidget.css';


const CardWidget = () => {
    return <>
    {/* fatla agregar un numero al carrito */}
        <PiShoppingCartSimpleThin  style={{width: '50px', height: '50px', cursor:"pointer"}}/>
    </>
}
export default CardWidget;