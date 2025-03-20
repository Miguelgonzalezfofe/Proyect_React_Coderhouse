import './ItemListContainer.css';
import ItemList from './itemList.jsx';
import GetItems from './GetItems.jsx';
import Loading from '../loading/Loading.jsx';
import { useState, useEffect } from 'react';

export default function ItemListContainer() {
    const [loading, setLoading] = useState(true);
    const [productItems, setProductItems] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            GetItems()
                .then((res) => {
                    setProductItems(res);
                    setLoading(false);
                })
                .catch(err => console.log(err));

        }, 1000)


    }, []);

    return <>
        <h1>hola</h1>

        <div className="itemListContainer" >
            <h2 className="text-center">Productos</h2>
            {loading ? <span class="loader"></span> : <ItemList items={productItems} filtradoProductos={setProductosFiltrados} />}
        </div>
        <div className="">
            {productosFiltrados && <ItemList items={productosFiltrados} />}
        </div>
    </>;
}