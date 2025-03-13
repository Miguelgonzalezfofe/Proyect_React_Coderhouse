const Item = (producto) => {
    const{id,img,nombre,descripcion,precio,stock}= producto.producto
    return <>
        <div className="card" key={id} style={{borderRadius: "30px", overflow: "hidden", boxShadow: "0 0 10px rgba(0,0,0,0.1)"}}>
            <img src={img} className="card-img-top" alt={nombre}  style={{width: "300px", borderBottom:"1px solid rgba(0, 0, 0, 0.18)"}}/>
            <div className="card-body">
                <p className="card-title fs-2">{nombre}</p>
                <p className="card-text">Precio: ${precio}</p>
                <p className="card-text">{descripcion}</p>
                <p className="card-text">Stock: {stock}</p>
                <a href="#" className="btn btn-primary w-100">Comprar</a>
            </div>
        </div>
    </>
}

export default Item