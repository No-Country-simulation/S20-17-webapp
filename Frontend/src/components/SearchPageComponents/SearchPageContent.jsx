import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function SearchPageContent() {
    const [searchQuery, setSearchQuery] = useState("")
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const GREETING = "Espera mientras preparamos el listado de proyectos..."
    const ERROR_MESSAGE = "¡UPS! Parece que no hay proyectos para descubrir ahora..."

    const filteredCards = projects.filter(
        (card) =>
            card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            card.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const fetchProjects = async () => {
        try {
            let url = import.meta.env.VITE_BACK_BASE_URL + import.meta.env.VITE_BACK_PROJECT_URL

            const projectsResponse = await fetch(url)

            const projectsData = await projectsResponse.json()

            setProjects(projectsData.projects)
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const mostrarFetch = () => {
        console.log(projects)
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <>
            <main className="body-font text-gray-600">
                <div className="relative mx-auto flex w-2/4 flex-col items-center justify-center">
                    <h2 className="mb-2 py-7 text-center text-3xl font-semibold text-[#1F497D]">Buscar Proyectos</h2>
                    <input
                        type="text"
                        id="hero-field"
                        name="hero-field"
                        className="mx-auto w-1/2 rounded border border-gray-300 bg-gray-100 bg-opacity-50 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Buscar por título, descripción o categoría"
                    />
                </div>
                <section className="container mx-auto px-5 py-9">
                    <h1 className="container mb-8 flex justify-center py-3 text-4xl font-semibold text-[#1F497D]">
                        Proyectos
                    </h1>
                    <div className="m-4 flex flex-wrap">
                        {filteredCards.map((card) => (
                            <div key={card._id} className="p-4 md:w-1/3">
                                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                                    <img
                                        className="w-full object-cover object-center md:h-36 lg:h-48"
                                        src={card.projectImg}
                                        alt={card.title}
                                    />
                                    <div className="p-6">
                                        <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                                            {card.category}
                                        </h2>
                                        <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                                            {card.title}
                                        </h1>
                                        <p className="mb-3 leading-relaxed">{card.description}</p>
                                        <Link to={`/project/${card._id}`} className="flex flex-wrap items-center">
                                            <a className="inline-flex cursor-pointer items-center text-[#1F497D] hover:text-[#121212] md:mb-2 lg:mb-0">
                                                Ver más sobre este proyecto
                                                <svg
                                                    className="ml-2 h-4 w-4"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
