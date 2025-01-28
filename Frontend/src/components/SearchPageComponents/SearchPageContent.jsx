import { LandingPageContent } from "../LandingPageComponents"

export function SearchPageContent() {
    return (
        <>
            <div className="relative mx-auto flex w-2/4 flex-col items-center justify-center">
                <h1 className="mb-8 py-5 text-center text-4xl font-semibold text-[#1F497D]">Buscar Proyectos</h1>
                <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="mx-auto w-1/2 rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
                />
            </div>
        </>
    )
}
