import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect } from "react";

let tableRowsData = [
    {
        titulo: '????????? ',
        marca: '?????',        
        categorias: ['?????'],
        colores: ['?????','?????'],
        talles: ['?????','?????'],
        precio: "?????.??"
    },
    {
        titulo: '????????? ',
        marca: '?????',        
        categorias: ['?????'],
        colores: ['?????','?????'],
        talles: ['?????','?????'],
        precio: "?????.??"
    },
    
]

function Chart (){

const [productsList, setProductsList] = useState([...tableRowsData]);
const [currentPage, setCurrentPage] = useState(0);

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
    callApi("/api/products", mostrarListaDeProductos);
  }, []);
  
  let mostrarListaDeProductos = (data) => {    
    let temporalData = data.products.map((p)=> 
    {        
        return {                        
            titulo : p.title,
            marca: p["brand.name"],
            descripcion : p.description,
            precio : p.price,
            categorias : [p["productgender.name"]]
        }
    })       
    setProductsList(temporalData);
  }; 

  let onSliceData = () => {
    let data = [...productsList]; // spreading will return a new array
    let sliceData = data.slice(currentPage*5,(currentPage+1)*(5));
    return sliceData;
  }

  let sumePagina = () => {
    if (currentPage < (productsList.length/5-1))
    setCurrentPage(currentPage + 1);
  }

  let restePagina = () => {
    if (currentPage > 0)
    setCurrentPage(currentPage - 1);
  }

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Marca</th>
                                <th>Descripcion</th>
                                <th>Categorias</th>                                
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>Producto</th>
                            <th>Marca</th>
                            <th>Descripcion</th>
                            <th>Categorias</th>                            
                            <th>Precio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {                            
                            onSliceData().map( ( row , i) => {
                                return <ChartRow { ...row} key={new Date().getTime() + i}/>
                            })
                            }

                        </tbody>
                    </table>
                <p style = {{textAlign: 'center'}}>
                <button onClick={restePagina}>Pagina Previa</button> Pagina Actual : {currentPage+1} / {Math.ceil(productsList.length/5)} <button onClick={sumePagina}>Siguiente Pagina</button>
                </p>
                </div>
            </div>
        </div>

    )
}

export default Chart;