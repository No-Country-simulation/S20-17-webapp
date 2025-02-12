import { Link } from "react-router-dom"

export function LandingPageHeader() {
    return (
        <>
            <div className="body-font h-20 text-black">
                <div className="flex h-full flex-wrap justify-between p-4">
                    <img
                        src="/avanti-logo.svg"
                        alt="Logo de Avanti - volver a la página de inicio"
                        className="h-full"
                    />
                    <nav className="mr-4 flex cursor-pointer flex-wrap items-center justify-center gap-4 text-lg font-semibold text-avanti-black">
                        <Link to="/register" className="grid min-h-12 min-w-20 place-items-center rounded-2xl">
                            <button className="relative z-30 overflow-hidden rounded-md bg-avanti-blue px-4 py-1 font-semibold text-white transition-all duration-700 after:absolute after:bottom-0 after:left-5 after:-z-20 after:h-1 after:w-1 after:translate-y-full after:rounded-md after:bg-avanti-red after:transition-all after:duration-700 after:hover:scale-[300] after:hover:transition-all after:hover:duration-700">
                                Registro
                            </button>
                        </Link>
                        <Link
                            to="./login"
                            className="grid min-h-12 min-w-20 place-items-center rounded-2xl"
                        >
                            <button className="px-4 z-30 py-1 bg-avanti-blue rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-avanti-red after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">
                                Login
                            </button>
                        </Link>
                    </nav>
                </div>
            </div>
            <header className="body-font bg-avanti-white text-gray-600">
                <div
                    className="mx-auto flex h-72 flex-col flex-wrap items-center justify-around bg-cover bg-center"
                    style={{
                        backgroundImage: "url('./bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="relative flex items-center">
                        <img
                            src="./avanti-icon-search.svg"
                            alt="icono de búsqueda"
                            className="absolute left-2 ml-1 h-6 w-6"
                        />
                        <input
                            className="mt-4 inline-flex items-center px-16 py-2 text-base border-avanti-black focus:border-avanti-light-green focus:ring-avanti-light-green mb-3 w-full rounded-2xl border focus:outline-none focus:ring-2"
                            type="text"
                            placeholder="Buscar Crowdfunding"
                        />
                    </div>
                    <nav className="flex cursor-pointer flex-wrap items-center justify-center gap-4 text-lg font-semibold text-avanti-black">
                        <Link to="/" className="min-w-7 hover:text-avanti-blue">
                            Inicio
                        </Link>
                        <Link className="min-w-7 hover:text-avanti-blue">Nuestras Reglas</Link>
                        <Link className="min-w-7 hover:text-avanti-blue">Recursos</Link>
                        <Link className="min-w-7 hover:text-avanti-blue">Acerca de</Link>
                    </nav>
                    <div className="flex items-center justify-center">
                        <div className="group relative">
                            <button className="relative inline-block cursor-pointer rounded-xl bg-avanti-black p-px font-semibold leading-6 text-white shadow-2xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                <Link to="/searchPage">
                                    <span className="relative z-10 block rounded-xl bg-gray-950 px-6 py-3">
                                        <div className="relative z-10 flex items-center space-x-2">
                                            <span className="transition-all duration-500 group-hover:translate-x-1">
                                                Iniciar una campaña
                                            </span>
                                            <img
                                                src="./avanti-icon-chevron.svg"
                                                alt="Icono empezar una campaña"
                                                className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1"
                                            />
                                        </div>
                                    </span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
