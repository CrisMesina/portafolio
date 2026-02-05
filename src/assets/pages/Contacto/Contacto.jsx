import React from 'react'

export const Contacto = () => {
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center font-Jersey text-6xl mb-20 text-white'>Contactame</h1>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='mx-auto'>
                        <form action="https://formsubmit.co/cmesinamorales@gmail.com" method='POST' className='p-5 w-110 xs:w-80 sm:w-90 md:w-160 lg:w-160 scroll-items-left'>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <input type="hidden" name="_next" value="https://crisdev.cl/"></input>
                            <div className='bg-zinc-900 h-auto text-white rounded-lg'>
                                <div className='mx-auto md:w-120 lg:w-120 flex flex-col p-5'>
                                    <label htmlFor="nombre" className='mt-5 mb-2 p-2'>Cual es tu nombre?</label>
                                    <input type="text" className=' bg-gray-800 h-15 p-2 rounded-lg' required name='nombre' placeholder='Ingresa tu nombre' />
                                </div>
                                <div className='mx-auto md:w-120 lg:w-120 flex flex-col p-5'>
                                    <label htmlFor="email" className='mt-5 mb-2 p-2'>Cual es tu email?</label>
                                    <input type="email" className=' bg-gray-800 h-15 p-2 rounded-lg' required name='email' placeholder='Ingresa tu email' />
                                </div>
                                <div className='mx-auto md:w-120 lg:w-120 flex flex-col p-5'>
                                    <label htmlFor="area" className='mt-5 mb-2 p-2'>Tu mensaje</label>
                                    <textarea name="area" className='mb-5 h-30 bg-gray-800 rounded-lg' required placeholder='¿En que te puedo ayudar?'></textarea>
                                </div>
                                <div className='mx-auto md:w-120  lg:w-120 flex flex-col  items-center justify-center p-5'>
                                    <button type='submit' className='my-10 rounded-lg p-5 bg-purple-400/20 '>
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className='text-white my-auto will-change-auto scroll-items-right'>
                        <h1 className='text-center mt-10 text-4xl font-Jersey'>Tienes dudas</h1>
                        <div className='p-10'>
                            <p className='text-lg mb-6 leading-relaxed'>
                                ¿No sabes por dónde empezar? No hay Problema. Estoy aqui para ayudarte con cualquier pregunta sobre mis proyectos, servicios o simplemente para conversar sobre ideas.
                            </p>
                            <p className='text-lg mb-6 leading-relaxed'>
                                Ya sea que busques colaboración en un proyecto, necesites asesoramientos técnico o solo quieres conocer sobre mi trabajo, te invito a contactarme.
                            </p>
                            <ul>
                                <li className='flex items-center my-10'>
                                    <span className="text-purple-400 mr-3">
                                        <img src="/icon-gmail.svg" className='w-10' alt="" />
                                    </span>
                                    <span>Email: cmesinamorales@gmail.com</span>
                                </li>
                                <li className='flex items-center my-10'>
                                    <span className="text-purple-400 mr-3">
                                        <img src="/icon-ig.svg" className='w-10' alt="" />
                                    </span>
                                    <span>Instagram: @4ntikrist0</span>
                                </li>
                                <li className='flex items-center my-10'>
                                    <span className="text-purple-400 mr-3"></span>
                                    <span>Respondere tu mensaje en las próximas 24 horas</span>
                                </li>
                                <li className='flex items-center my-10'>
                                    <span className="text-purple-400 mr-3"></span>
                                    <span>Abierto a nuevas oportunidades y proyectos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
