import productos from './productos'
import Item from './item'
import { useEffect, useState } from 'react'
import Loanding from './Loading'

const CardProducto = () => {

    const [loanding, setLoanding] = useState(true)
    useEffect(() => {
        setTimeout(() => { setLoanding(false) }, 2500)

    }, [])


    return (
        // estilos para el contenedor de los productos que se adaptan a todos los tamaños de pantalla
        // se recorre el array de productos y se mapea cada uno de ellos para mostrarlos en la pantalla
        // y los muestra de manera ordenada
        <div className=" d-flex flex-wrap justify-content-center container mt-5 gap-3">
            {loanding? <Loanding /> : productos.map((prod) => {
                return (

                    <Item key={prod.id} producto={prod} />
                )
            })}
        </div>
    )

}
export default CardProducto