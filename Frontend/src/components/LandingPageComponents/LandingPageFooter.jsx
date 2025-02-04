import { Link } from "react-router-dom"

export function LandingPageFooter() {
    return (
        <>
            <footer className="body-font flex h-20 w-full items-center justify-between gap-4 bg-avanti-blue p-4 text-white">
                <div className="h-full">
                    <img
                        src="./avanti-logo-footer.svg"
                        alt="Logo de Avanti - volver a la página de inicio"
                        className="h-full"
                    />
                </div>
                <p className="font-semibold text-avanti-white">© 2025 Avanti</p>
                <div className="flex items-center gap-4">
                    <Link
                        className="text-avanti-white"
                        href="https://www.facebook.com"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./facebook-logo.svg" alt="Logo de Facebook" className="h-7 w-7" />
                    </Link>
                    <Link className="text-avanti-white" href="https://x.com/" target="blank" rel="noopener noreferrer">
                        <img src="./x-logo.svg" alt="Logo de X / Twitter" className="h-7 w-7" />
                    </Link>
                    <Link
                        className="text-avanti-white"
                        href="https://instagram.com/"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./instagram-logo.svg" alt="Logo de Instagram" className="h-7 w-7" />
                    </Link>
                </div>
            </footer>
        </>
    )
}
