
export const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                    <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-zinc-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-800/40 backdrop-blur-lg rounded-full border border-gray-600/30 mb-6 animate-bounce">
                            <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 008 9.172V5L8 4z" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold text-gray-100 mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-slate-200 to-zinc-300 animate-pulse">
                            ¡Casi listo!
                        </span>
                    </h1>
                    
                    <div className="space-y-4 mb-8">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200/90">
                            Estamos trabajando en esta página
                        </h2>
                        <p className="text-lg text-gray-400/80 max-w-2xl mx-auto leading-relaxed">
                            Mi portafolio está siendo creado con mucho cariño y atención al detalle. 
                            Pronto podrás ver todos mis proyectos y habilidades.
                        </p>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-center items-center space-x-2 mb-4">
                            <span className="text-gray-300/80 font-medium">Progreso:</span>
                            <span className="text-gray-100 font-bold">50%</span>
                        </div>
                        <div className="w-full max-w-md mx-auto bg-gray-800/30 rounded-full h-3 backdrop-blur-sm border border-gray-600/30">
                            <div className="bg-gradient-to-r from-gray-600 to-slate-500 h-3 rounded-full w-[50%] animate-pulse shadow-lg shadow-gray-700/30"></div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-2 mb-8">
                        <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-slate-400 rounded-full animate-bounce animation-delay-200"></div>
                        <div className="w-3 h-3 bg-zinc-500 rounded-full animate-bounce animation-delay-400"></div>
                    </div>

                    <div className="backdrop-blur-lg bg-gray-900/20 border border-gray-700/30 rounded-2xl p-6 max-w-md mx-auto">
                        <p className="text-gray-400/70 text-sm mb-2">¿Tienes alguna pregunta?</p>
                        <p className="text-gray-200 font-medium">Contáctame mientras tanto</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="mailto:cmesinamorales@gmail.com">
                                <button className="bg-gray-800/40 hover:bg-gray-700/50 text-gray-200 px-4 py-2 rounded-lg transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50">
                                Email
                            </button>
                            </a>
                            <a href="https://www.linkedin.com/in/cristopher-mesina-784153317/" target="_blank">
                                <button className="bg-gray-800/40 hover:bg-gray-700/50 text-gray-200 px-4 py-2 rounded-lg transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50">
                                    LinkedIn
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-10 w-2 h-2 bg-gray-500/20 rounded-full animate-ping"></div>
                    <div className="absolute top-1/3 right-20 w-1 h-1 bg-slate-400/30 rounded-full animate-ping animation-delay-1000"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-zinc-500/25 rounded-full animate-ping animation-delay-2000"></div>
                    <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gray-400/30 rounded-full animate-ping animation-delay-3000"></div>
                </div>
            </div>
        </>
    )
}
