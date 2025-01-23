import { Link } from "react-router-dom"

export function LandingPage() {
    return (
        <div className="grid h-screen w-full grid-rows-[1fr_8fr_1fr] items-center bg-black text-white">
            <header className="border-b-avanti-light-green flex items-center justify-center border-b-2 py-4">
                <h1>AVANTI</h1>
            </header>
            <main className="grid place-items-center">
                <div className="border-avanti-light-green m-4 flex flex-col gap-4 rounded-6xl border-2 border-solid p-8">
                    <h2 className="">Se vienen cositas...</h2>
                    <p>Un paso a la vez, todo se puede</p>
                    <button className="grid min-h-12 min-w-12 place-items-center rounded-2xl bg-white bg-[linear-gradient(92deg,_#1f497d,_#2e806e,_#005839)] bg-[length:200%_200%] bg-left text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-lime-600 hover:bg-right focus:outline-none focus:ring-2 focus:ring-offset-2 active:bg-gray-700 active:text-white">
                        <Link to="./login" className="grid h-full w-full place-items-center">
                            {" "}
                            ¡Entendido!
                        </Link>
                    </button>
                </div>
            </main>
            <footer className="border-t-avanti-light-green flex items-center justify-center border-t-2 py-4">
                <h2>NoCountry | Equipo-s20-17-webapp</h2>
            </footer>
        </div>
    )
}
