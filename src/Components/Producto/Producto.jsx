import React from 'react';
import './Producto.css';

const Producto = ({producto}) => {

  const { nombre,descripcion,precio,sku,stock,img } = producto;

 return(
  
  <div className="card shadow">
    <div className="row g-0">
      <div className="col-lg-4 ">
        <div className="bg-dark- w-100 h-100 d-flex align-items-center justify-content-center justify-content-md-start">
          <img src={img} className="img-fluid" alt={nombre} />
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card-body pb-0 d-flex align-items-start flex-column h-100">
          <div className='mb-auto'>
            <h2 className="card-title">{nombre}</h2>
            <p className="card-text">{descripcion}</p>
          </div>

          <div className="my-auto py-4 w-100 d-flex flex-column align-items-center align-items-md-end">
            <h3 className="card-text">Precio: $ {precio}</h3>
            <p className="card-text">Stock disponible: {(stock > 0) ? stock : 'Sin stock'}</p>
            
          </div>

          <div className='w-100 d-flex justify-content-center'>
            <p className="card-text">
              <small className='text-body-secondary'>SKU: {sku}</small>
              </p>
          </div>
        </div>
      </div>

    </div>
  </div>
 )
}


export { Producto }
