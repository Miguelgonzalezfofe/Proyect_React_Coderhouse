import './item.css'
import { useState, useRef, useEffect } from 'react'


const Item = (item) => {
    const { id, image, title, description, price, category } = item.item

    const SumProduct = () => {
        const [product, setProduct] = useState(0)
        const input = useRef()

        const handleSum = () => {
            setProduct(product + 1)
        }

        const handleSubtract = () => {
            if (product > 0) {
                setProduct(product - 1)
            }
        }
        const addProduct = () => {
            const products = {
                amount: product,
                id: id,
                image: image,
                title: title,
                description: description,
                price: price,
                category: category
            }
            console.log(products)

        }

        const productoFiltrado =()=>{
            const [productFiltrado, setProductFiltrado] = useState(false)

            useEffect(() => {
                
            })

        }

        return <>
            <div className="containerBtn">
                <div className="btn_num">
                    <button className='btn border' onClick={handleSubtract}>-</button>
                    <p type="number" ref={input} >{product}</p>
                    <button className='btn border' onClick={handleSum}>+</button>
                </div>
                <div className="d-grid gap-2">
                    <a href="#" className="btn btn-primary w-100" onClick={addProduct}>Comprar</a>
                    <a href="#" className="btn btn-primary w-100" onClick={addProduct}>ver detaller</a>
                </div>

            </div>

        </>
    }


    return <>
        <div className="card" key={id} >
            <div className="content_img">
                <img src={image} className="img-thumbnail mx-auto" alt={title} style={{ width: "300px", borderBottom: "1px solid rgba(0, 0, 0, 0.18)" }} />
            </div>
            <div className="card-body">
                <p className='card-category badge text-bg-primary'>{category}</p>
                <p className="card-title fs-5">{title}</p>
                <p className="card-text card-price">Precio: ${price}</p>
                <div className="containerBtn">
                    <SumProduct />
                </div>
            </div>
        </div>
    </>
}

export default Item