
import { useEffect, useState } from 'react'
import { navegador } from '../data/data'

export const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', onScroll)
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <div className={`fixed top-0 z-20 w-full text-white transition-shadow duration-300 ${scrolled ? 'bg-black/70 shadow-lg shadow-[#1e1e1e]' : ''}`}>
                <div className='hidden md:flex h-20 p-2 w-full justify-end items-end'>
                    <div className='flex my-auto w-full justify-start items-start'>
                        <a href='#inicio' className='my-auto p-4 font-medium text-lg hover:bg-gradient-to-r hover:from-green-950 hover:via-green-700 hover:to-green-300 hover:text-transparent hover:bg-clip-text transition-all'>Inicio</a>
                    </div>
                    {navegador.map((item, i)=>(
                        <div className='flex my-auto w-96 text-center justify-end' key={i}>
                            <a href={item.link} className={`p-3 font-medium text-lg text-white transition-all ${item.class} hover:text-purple-400 hover:will-change-transform hover:translate-y-2`}>
                                {item.label}
                            </a>
                        </div>
                    ))}
                </div>


                <div className='md:hidden block'>
                    <div className='flex'>
                        <div className=' p-7 text-start my-auto'>
                            <a href="#inicio">Inicio</a>
                        </div>
                        <div className={` p-2 h-20 flex w-full items-end justify-end transition-shadow duration-300 `}>
                            <button className={`my-auto ${scrolled ? 'bg-white p-0 rounded-full' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                                <img src="/icon-burger.svg" className='w-12 ' alt="" />
                            </button>
                        </div>

                        {
                            isOpen ? (
                                <>
                                    <div 
                                        onClick={() => setIsOpen(!isOpen)} 
                                        className='absolute h-screen w-screen bg-black/70 transition-all duration-150'>
                                    </div>
                                </>
                            ) : (
                                <>
                                
                                </>
                            )
                        }
                        {isOpen ? (
                            <>
                                <div className='absolute z-10 bg-linear-to-b from-gray-900 to-black h-screen xs:w-60 md:w-96 lg:w-96  texto-izq will-change-auto transition-all duration-300'>
                                   <h1></h1> 
                                </div>
                            </>
                        ):(
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
