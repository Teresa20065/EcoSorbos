import React from 'react'
import cartgif from "../assets/cartGif.gif";
import "../styles/BestSellers.css";


const EmptyCart = () => {
    return (
        <div className=' emptyCartMainParent text-center relative top-20 h-full'>

            <div id='fs'>
                <p className=' text-3xl fof uppercase ' id='fs'>El carrito está vacío, tal vez pida algo :) </p>
            </div>

            <img src={cartgif} className=" absolute cg" />
        </div>
    )
}

export default EmptyCart