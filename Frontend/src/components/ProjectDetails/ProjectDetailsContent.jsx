import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export function ProjectDetailsContent() {
    const { projectId } = useParams()
    const [project, setProject] = useState()
    const [loading, setLoading] = useState(true)
    const GREETING = "Espera mientras juntamos los detalles de este proyecto..."
    const ERROR_MESSAGE = "¡UPS! Parece que esta proyecto no existe..."

    const fetchProject = async () => {
        try {
            const projectResponse = await fetch(
                import.meta.env.VITE_BACK_BASE_URL + import.meta.env.VITE_BACK_PROJECT_URL + projectId,
            )

            const projectData = await projectResponse.json()

            setProject(projectData.project)

            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProject()
    }, [projectId])

    return (
        <main className="grid min-h-[calc(100svh-15rem)] place-items-center">
            <div className="m-4 flex min-w-96 flex-col gap-4 rounded-6xl border-2 border-solid border-avanti-black bg-[rgba(255,255,255,0.6)] p-8 text-black shadow-lg backdrop-blur-lg">
                <h1 className="mx-auto font-bold">{project?.title}</h1>
                <div className="flex items-center gap-4">
                    <img
                        src={project?.projectImg}
                        alt={project?.title}
                        className="rounded-2xl"
                        style={{
                            maxWidth: "200px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <p className="max-w-64">{project?.description}</p>
                </div>
                <p className="grid min-h-12 min-w-12 place-items-center">
                    <Link
                        to="/checkout"
                        className="flex h-full w-full items-center justify-center gap-[1ch] rounded-2xl focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
                    >
                        <button
                            type="goToCheckout"
                            className="w-full rounded-2xl bg-gradient-avanti bg-[length:200%_200%] bg-left p-3 font-medium text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-right focus:border-none focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
                        >
                            {" "}
                            ¡Apoya este proyecto!
                        </button>
                    </Link>
                </p>
            </div>
        </main>
    )

    // return (
    //     <main id="ProjectDetailsContainer">
    //         {loading && <h2 id="ProjectDetailsLoadingGreet">{GREETING}</h2>}
    //         {!loading && project && <ProjectDetails pet={pet} />}
    //         {!loading && !project && <h2 id="ProjectDetailsErrorMessage">{ERROR_MESSAGE}</h2>}
    //     </main>
    // )
}
