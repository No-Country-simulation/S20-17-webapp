import { Link } from "react-router-dom"

export function ErrorPage() {
    return (
        <div className="grid h-screen w-full grid-rows-[1fr_8fr_1fr] items-center bg-black text-white">
            <header className="flex items-center justify-center border-b-2 border-b-avanti-light-green py-4">
                <h1>AVANTI</h1>
            </header>
            <main className="grid place-items-center">
                <div className="m-4 flex flex-col gap-4 rounded-6xl border-2 border-solid border-avanti-light-green p-8">
                    <h2 className="">¡UPS! Esa página no existe...</h2>
                    <button
                        className="grid min-h-12 min-w-12 place-items-center rounded-2xl bg-white bg-gradient-avanti bg-[length:200%_200%] bg-left text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-right"
                        tabIndex={-1}
                    >
                        <Link
                            to="/"
                            className="grid h-full w-full place-items-center rounded-2xl focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
                            tabIndex={0}
                        >
                            {" "}
                            ¡Entendido!
                        </Link>
                    </button>
                </div>
            </main>
            <footer className="flex items-center justify-center border-t-2 border-t-avanti-light-green py-4">
                <h2>NoCountry | Equipo-s20-17-webapp</h2>
            </footer>
        </div>
    )
}
