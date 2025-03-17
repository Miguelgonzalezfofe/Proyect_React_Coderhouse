import GetProduct from './getProduct';
import Item from './item';
import { useEffect, useState } from 'react';
import Loanding from './Loading';

const CardProducto = () => {
    const [Loanding, setLoanding] = useState(true);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        GetProduct()
            .then(data => {
                setProductos(data);
                setLoanding(false);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="d-flex flex-wrap justify-content-center container mt-5 gap-3">
            {Loanding ? <Loanding /> : productos.map((prod) => (
                <Item key={prod.id} producto={prod} />
            ))}
        </div>
    );
};

export default CardProducto;