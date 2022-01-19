import React from 'react'
import imagen from '../assets/images/error-404.jpg'

export default function NotFound() {
    return (
        <div>            
            <img src={imagen} alt="No encontrado"></img>
        </div>
    )
}
