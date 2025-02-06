import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"

const TestimonialSlider = () => {
    // Testimonios a mostrar
    const testimonios = [
        { texto: '"Excelente servicio, totalmente recomendable!"', autor: "Juan Pérez" },
        { texto: '"Un equipo increíble que te ayuda en cada paso."', autor: "Ana Gómez" },
        { texto: '"Una experiencia única, ¡estoy muy contento con el resultado!"', autor: "Carlos López" },
        { texto: '"Recomiendo totalmente esta empresa. ¡Impresionante trabajo!"', autor: "Laura Sánchez" },
    ]

    // Estado para manejar el índice del testimonio actual
    const [index, setIndex] = useState(0)

    // Cambiar el testimonio cada 4 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonios.length)
        }, 4000) // Cambia cada 4 segundos

        return () => clearInterval(interval) // Limpiar el intervalo al desmontar el componente
    }, [])

    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-lg font-medium text-avanti-white">Lo que dicen nuestros usuarios</p>
            <div className="flex flex-col items-center gap-2">
                <p className="italic text-avanti-white">{testimonios[index].texto}</p>
                <p className="font-semibold text-avanti-white">- {testimonios[index].autor}</p>
            </div>
        </div>
    )
}

export function LandingPageFooter() {
    return (
        <>
            <footer
                className="body-font flex w-full flex-col items-center bg-avanti-blue p-8 text-white"
                style={{
                    backgroundImage: "url('./public/bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay",
                }}
            >
                {/* Sección superior con logo y texto */}
                <div className="flex w-full items-center justify-between">
                    <figure className="flex items-center">
                        <img src="/avanti-logo-footer.svg" alt="Logo de Avanti" className="h-[60px]" />
                    </figure>
                    <p className="text-xl font-semibold text-avanti-white">© 2025 Avanti</p>
                </div>

                {/* Sección central para organizar mejor el contenido */}
                <div className="mt-8 flex w-full items-center justify-between">
                    {/* Enlaces rápidos */}
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-lg font-bold text-avanti-white">Enlaces rápidos</p>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <Link className="text-avanti-white hover:text-avanti-light-green">Sobre nosotros</Link>
                            </li>
                            <li>
                                <Link className="text-avanti-white hover:text-avanti-light-green">Contacto</Link>
                            </li>
                            <li>
                                <Link className="text-avanti-white hover:text-avanti-light-green">
                                    Términos y condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Testimonios dinámicos */}
                    <TestimonialSlider />

                    {/* Redes sociales */}
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-lg font-medium text-avanti-white">Síguenos</p>
                        <div className="flex gap-4">
                            <Link
                                className="text-avanti-white"
                                to="https://www.facebook.com"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/facebook-logo.svg"
                                    alt="Logo de Facebook"
                                    className="h-7 w-7 transition-all duration-300 ease-in-out hover:blur-[2px]"
                                />
                            </Link>
                            <Link
                                className="text-avanti-white"
                                to="https://x.com/"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/x-logo.svg"
                                    alt="Logo de X / Twitter"
                                    className="h-7 w-7 transition-all duration-300 ease-in-out hover:blur-[2px]"
                                />
                            </Link>
                            <Link
                                className="text-avanti-white"
                                to="https://instagram.com/"
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/instagram-logo.svg"
                                    alt="Logo de Instagram"
                                    className="h-7 w-7 transition-all duration-300 ease-in-out hover:blur-[2px]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
