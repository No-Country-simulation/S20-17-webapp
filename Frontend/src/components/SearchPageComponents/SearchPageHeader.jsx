import { Link } from "react-router-dom"

export function SearchPageHeader() {
    return (
        <>
            <header className="body-font h-20 text-black">
                <div className="flex h-full flex-wrap justify-between p-4">
                    <Link to={"/"} className="h-full">
                        <img
                            src="/avanti-logo.svg"
                            alt="Logo de Avanti - volver a la página de inicio"
                            className="h-full"
                        />
                    </Link>
                    <nav className="mr-4 flex cursor-pointer flex-wrap items-center justify-center gap-4 text-lg font-semibold text-avanti-black">
                        <Link to="/register" className="grid min-h-12 min-w-20 place-items-center rounded-2xl">
                            <button className="relative z-30 overflow-hidden rounded-md bg-avanti-blue px-4 py-1 font-semibold text-white transition-all duration-700 after:absolute after:bottom-0 after:left-5 after:-z-20 after:h-1 after:w-1 after:translate-y-full after:rounded-md after:bg-avanti-red after:transition-all after:duration-700 after:hover:scale-[300] after:hover:transition-all after:hover:duration-700">
                                Registro
                            </button>
                        </Link>
                        <Link to="/login" className="grid min-h-12 min-w-20 place-items-center rounded-2xl">
                            <button className="relative z-30 overflow-hidden rounded-md bg-avanti-blue px-4 py-1 font-semibold text-white transition-all duration-700 after:absolute after:bottom-0 after:left-5 after:-z-20 after:h-1 after:w-1 after:translate-y-full after:rounded-md after:bg-avanti-red after:transition-all after:duration-700 after:hover:scale-[300] after:hover:transition-all after:hover:duration-700">
                                Login
                            </button>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
