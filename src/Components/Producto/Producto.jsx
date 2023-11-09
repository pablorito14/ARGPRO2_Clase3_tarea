import React from 'react';
import './Producto.css';

const Stock = ({stock}) => {
  if(stock === 0) { 
    return (
      <p className="mb-0 card-text fw-bold">
        <span className='text-muted fw-bold-'>No disponible por el momento</span>
      </p>
    )
  }
  if(stock < 5) {
    return  (
      <p className="mb-0 card-text fw-bold">
        <span className='ultimas-unidades'>¡Ultimas {stock} unidades!</span>
      </p>
    )
  }
  return (
    <p className="mb-0 card-text fw-bold">
      <span className='text-muted fw-bold-'>{stock} unidades disponibles</span>
    </p>
  )
}

const PrecioBoton = ({stock,precio}) => {
  
  if(stock === 0) {
    return (
      <>
        <h3 className="fw-bold card-text opacity-25">Precio: $ {precio}</h3>
        <button className='btn px-5' disabled>Agregar al carrito</button>
      </>  
    )
  }

  return (
    <>
      <h3 className="fw-bold card-text">Precio: $ {precio}</h3>
      <button className='btn py-3 py-md-2 px-5'>Agregar al carrito</button>
    </>
  )
}

const Producto = ({producto}) => {

  const { nombre,descripcion,precio,sku,stock,img } = producto;

  return(
    <div className="card shadow">
      <div className="row g-0">
        <div className="col-lg-4 ">
          <div className="w-100 h-100 d-flex align-items-center justify-content-center">
            <img src={`./static/media/productos/${img}`} className="img-fluid rounded" alt={nombre} />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card-body pb-0 d-flex align-items-start flex-column h-100">
            <div className='mb-auto'>
              <h2 className="card-title">{nombre}</h2>
              <p className="card-text mb-2">{descripcion}</p>
              <p className="w-100 mb-0">
                <small className='text-body-secondary'>SKU: {sku}</small>
              </p>  
            </div>

            <div className="my-auto py-4 w-100 d-flex flex-column align-items-center align-items-md-end">
              <Stock stock={stock}/>
              <PrecioBoton stock={stock} precio={precio}/>
            </div>

            <div className='w-100 d-flex justify-content-around'>
              <p className="card-text">
                {/* <small className='text-body-secondary'>SKU: {sku}</small> */}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export { Producto }
