import React from 'react';
// import imagenFondo from '../assets/images/zapatilla.jpg';
import { useState, useEffect } from "react";

let lastProductHardCoded = [
    {
    titulo: "???????????",
    imagen: "/images/products/default-image.png",
    descripcion: "???????????????????????"    
  }
]

function LastMovieInDb(){

const [lastProduct, setLastProduct] = useState([lastProductHardCoded[0]]);

let callApi = (url, consecuencia) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        consecuencia(data);        
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {    
    callApi("/api/products/last", mostrarLastProduct);
  }, []);
  
  let mostrarLastProduct = (data) => {    
    let temporalData = 
    {   
            titulo: data.lastProduct.title,            
            descripcion: data.lastProduct.description,
            imagen: data.lastProduct.image,
            precio: data.lastProduct.price     
    }          
    setLastProduct(temporalData);
  }; 

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto en la Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-left">
                        <h5 className="m-0 font-weight-bold text-gray-800">{lastProduct.titulo}</h5>                        
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.imagen} alt=" Star Wars - Mandalorian "/>                        
                    </div>
                    <p>{lastProduct.descripcion}</p>
                    <p>$ {lastProduct.precio}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver Detalles del Producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
