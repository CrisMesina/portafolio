import { Loader } from "../../general_components/Loader";
import { Nav } from "../../general_components/Nav"
import React, { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Proyectos } from "../Proyectos/Proyectos";
import { SobreMi } from "../About/SobreMi";
import { Contacto } from "../Contacto/Contacto";

export const Home = () => {

    const [loading, setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 3000)

    }, [])
    return (
        <>
            
            {
                loading ? (
                    <>
                        <div className="flex flex-col items-center justify-center h-screen">
                            <Loader/>
                        </div>
                    </>
                ):(
                    <>
                        <div className="" id="inicio">
                            <Nav/>
                            <Hero/>
                        </div>
                        <div className="min-h-screen" id="proyectos">
                            <Proyectos/>
                        </div>
                        <div className="" id="sobre-mi" >
                            <SobreMi/>
                        </div>
                        <div className="min-h-screen" id="contacto">
                            <Contacto/>
                        </div>
                    </>
                )
            }
        </>
    )
}
