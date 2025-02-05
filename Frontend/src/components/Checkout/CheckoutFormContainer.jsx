import { Link } from "react-router-dom"
import { CheckoutForm } from "./CheckoutForm"

export function CheckoutFormContainer() {
    const USER_LOGIN = JSON.parse(localStorage.getItem("userLogin")).user
    console.log(USER_LOGIN)

    return (
        <main
            className="grid min-h-[calc(100vh-5rem)] place-items-center p-4"
            style={{
                backgroundImage: "url('./auth-background-image.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Background image provided by Mego-studio in freepik.com - https://www.freepik.com/free-photo/manager-woman-leading-brainstorming-meeting_9812487.htm#fromView=search&page=1&position=39&uuid=990df427-b95b-4dd8-8baa-3e70bbe75f1c&new_detail=true&query=brainstorming */}
            <div className="m-4 flex min-w-96 max-w-md flex-col gap-4 rounded-6xl border-2 border-solid border-avanti-black bg-[rgba(255,255,255,0.6)] p-8 text-black shadow-lg backdrop-blur-lg">
                <h1 className="mx-auto font-bold">Realizar una donación a un proyecto</h1>
                <p>
                    Estimado <span className="font-mono font-bold"> {USER_LOGIN.name}</span>, por ahora no le vamos a
                    cobrar nada. Si el proyecto llega a la meta de financiamiento, te vamos a debitar el pago de tu
                    tarjeta cuando termine la campaña. Le va a llegar un mail de confirmación a{" "}
                    <span className="font-mono font-bold"> {USER_LOGIN.email}</span> cuando el pago se haya procesado
                    bien.
                </p>
                <CheckoutForm />
                <p className="mb-4 grid min-h-12 min-w-12 place-items-center">
                    <Link
                        to="/contact"
                        className="flex h-full w-full items-center justify-center gap-[1ch] rounded-2xl focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
                    >
                        ¿Algún problema con el pago?
                        <span className="bg-gradient-avanti bg-clip-text font-bold text-transparent">
                            {" "}
                            ¡Contáctanos!
                        </span>
                    </Link>
                </p>
            </div>
        </main>
    )
}
