
import React from 'react'
import { proyectos } from '../../data/data'


export const Proyectos = () => {
    return (
        <>
            <h1 className='text-white text-center my-20 text-7xl font-Jersey'>Proyectos</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full mx-auto my-40 text-white '>
                
                {proyectos.map((m, i) =>(
                    <div className='text-white lg:w-96 md:w-96 xs:w-70 my-10 mx-auto scroll-items-top transition-all duration-300'>
                        <div className='shadow-lg shadow-gray-600 p-1 rounded-2xl'>
                            <img src={m.img} className='w-full mb-5 object-cover h-96 rounded-t-2xl' alt="" />
                            <h1 className='text-center font-Jersey text-2xl'>{m.label}</h1>
                            <a href={m.url} className='text-center items-center justify-center flex font-bold w-30 mx-auto p-5 my-5 rounded-2xl bg-purple-950 text-white shadow-lg shadow-gray-600 hover:will-change-transform hover:translate-y-2 hover:shadow-md transition-all duration-200' target='_blank'>
                                Visitar
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
