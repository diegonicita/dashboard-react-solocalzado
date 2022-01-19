import React from 'react';

function ChartRow(props){
    return (
                <tr>
                    <td>{props.titulo}</td>
                    <td>{props.marca}</td>
                    <td>{props.descripcion}</td>                    
                    <td>
                        <ul>
                            {
                             props.categorias?props.categorias.map( (category,i) => 
                                <li key={`categoria ${i}`}>{category}</li>
                            ):""}
                        </ul>
                    </td>                              
                    <td>$ {props.precio}</td>
                </tr>
            )
    }
    
        

export default ChartRow;