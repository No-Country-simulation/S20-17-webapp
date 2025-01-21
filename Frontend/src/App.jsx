function App() {
    return (
        <div className="grid h-screen w-full grid-rows-[1fr_8fr_1fr] items-center bg-black text-white">
            <header className="flex items-center justify-center border-b-2 border-b-white py-4">
                <h1>AVANTI</h1>
            </header>
            <main className="grid place-items-center">
                <div className="rounded-6xl m-4 flex flex-col gap-4 border-2 border-solid border-white p-8">
                    <h2 className="">Se vienen cositas...</h2>
                    <p>Un paso a la vez, todo se puede</p>
                    <button className="min-h-12 min-w-12 rounded-2xl bg-white text-black hover:bg-lime-600 hover:text-white active:bg-gray-700 active:text-white">
                        ¡Entendido!
                    </button>
                </div>
            </main>
            <footer className="flex items-center justify-center border-t-2 border-t-white py-4">
                <h2>NoCountry | Equipo-s20-17-webapp</h2>
            </footer>
        </div>
    )
}

export default App
