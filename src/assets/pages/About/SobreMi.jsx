import React from 'react'

export const SobreMi = () => {
    return (
        <>
            <div className='text-white'>
                <h1 className='text-center font-Jersey text-6xl'>Sobre mi</h1>
                <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='p-15 scroll-items-left lg:block hidden'>
                        <img src="/about.jpg" className='w-auto rounded-2xl h-screen' alt="" />
                    </div>
                    <div className=' w-full  flex lg:w-full my-10 '>
                        <div className='p-15 md:p-0 md:my-auto scroll-items-right'>
                            <p className='text-xl text-center md:p-5  '>Mi nombre es Cristopher Mesina, soy Técnico Informático sin experiencia laboral formal, pero con una sólida base de conocimientos técnicos y una fuerte orientación al aprendizaje continuo. Poseo conocimientos en Desarrollo Web, redes y bases de datos, además de un manejo intermedio de Excel. Actualmente me encuentro aprendiendo Node.js, Figma y profundizando en el desarrollo de videojuegos, complementando mis habilidades técnicas y creativas.</p>
                            <p className='text-xl text-center md:p-10 '>Asimismo, cuento con conocimientos en Canva, lo que me permite apoyar en la creación de material visual y presentaciones. Me caracterizo por mi responsabilidad, compromiso y disposición para aprender, con una actitud proactiva orientada al crecimiento profesional y a la correcta ejecución de tareas en el área informática.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
