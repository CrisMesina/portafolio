import { habilidades } from '../../../data/data'

export const Hero = () => {
    return (
        <>
            <div>
                <img src="https://sotni.ru/wp-content/uploads/2023/08/firewatch-dzhuliia-4k-14.webp" className="h-screen object-cover absolute w-full" alt="" />
                <div className="grid grid-cols-1 justify-center items-center text-start p-10 text-white h-screen relative">
                    <div className='mt-20'>
                        <h1 className='lg:text-xl  md:text-xl  xs:text-2xl font-semibold font-Indie texto-aba'>Hola, mi nombre es</h1>
                        <h2 className='lg:text-8xl md:text-8xl xs:text-4xl font-bold font-Jersey texto-aba'>Cristopher Mesina.</h2>
                        <h3 className='lg:text-7xl md:text-7xl xs:text-5xl font-bold font-Jersey texto-aba'>Desarrollador Web</h3>
                        <div className='grid grid-cols-4 md:flex'>
                            {
                                habilidades.map((h, i) =>(
                                    <div className='my-10 mx-5 w-auto texto-arr'>
                                        <img src={h.icon} className='w-15 hover:bg-gray-900 hover:will-change-transform hover:rotate-10 hover:rounded-full xs:p-0 md:p-2 lg:p-2' alt="" title={h.label} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
