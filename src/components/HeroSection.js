import React from 'react'
import "../styles/HeroSection.css"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"


const HeroSection = () => {
    return (
        <div className='heroSecMainParent'>

            <p className='text-4xl text-center mt-20 font-bold  welcomStore'>BIENVENIDO A EcoSorbos</p>
            <br />
            <br />

            <p className='heroDescription justify-center items-center ml-20 relative text-xl flex flex-wrap'> Descubre EcoSorbos, la revolución en sostenibilidad y sabor. Nuestras bombillas comestibles y biodegradables no solo cuidan del medio ambiente, sino que también ofrecen una experiencia única y deliciosa. ¡Únete al movimiento y saborea el cambio con EcoSorbos! </p>


            <div className='heroPicHold flex flex-row '>
                <img src="https://wearesorbos.com/wp-content/uploads/2022/06/icon_lactosa.svg" className=" w-20" />
                <img src="https://wearesorbos.com/wp-content/uploads/2022/06/icon_gluten.svg" className=" w-20" />
                <img src="https://wearesorbos.com/wp-content/uploads/2022/06/icon_compostable.svg" className=" w-20" />
    
            </div>

            <div className=' text-xl font-medium flex flex-row heroHeadingHold'>
                <p> Libres de Lactosa</p>
                <p> 100% Veganos </p>
                <p className='ml-8'> Empaque Compostable </p>
            </div>

            <div className='heroDescHold flex-row flex relative text-base font-normal'>
                <p> Perfectos para quienes tienen <br />  intolerancia a la lactosa. </p>
                <p> Elaborados sin ingredientes <br />  de origen animal. </p>
                <p className='ml-8'>Nuestro empaque se convierte en composta, <br /> cerrando el ciclo de sostenibilidad. </p>
            </div>
        </div>
    )
}

export default HeroSection