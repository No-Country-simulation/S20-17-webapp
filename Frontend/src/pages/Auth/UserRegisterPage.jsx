import { RegisterForm, AuthFooter, AuthHeader } from "../../components"
import { Link } from "react-router-dom"

export function UserRegisterPage() {
    return (
        <div className="grid min-h-screen w-full grid-rows-[1fr_8fr_1fr] items-center text-white">
            <AuthHeader />
            <main className="grid h-full place-items-center bg-[url(./auth-background-image.webp)]">
                {/* Background image provided by Mego-studio in freepik.com - https://www.freepik.com/free-photo/manager-woman-leading-brainstorming-meeting_9812487.htm#fromView=search&page=1&position=39&uuid=990df427-b95b-4dd8-8baa-3e70bbe75f1c&new_detail=true&query=brainstorming */}
                <div className="m-4 flex min-w-96 flex-col gap-4 rounded-6xl border-2 border-solid border-avanti-black bg-[rgba(255,255,255,0.6)] p-8 text-black shadow-lg backdrop-blur-lg">
                    <h1 className="mx-auto">¡Regístrate en Avanti!</h1>
                    <RegisterForm />
                    <p className="grid min-h-12 min-w-12 place-items-center">
                        <Link
                            to="/login"
                            className="flex h-full w-full items-center justify-center gap-[1ch] rounded-2xl focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
                        >
                            ¿Tienes una cuenta?
                            <span className="bg-gradient-avanti bg-clip-text font-bold text-transparent">
                                {" "}
                                ¡Inicia sesión aquí!
                            </span>
                        </Link>
                    </p>
                </div>
            </main>
            <AuthFooter />
        </div>
    )
}
