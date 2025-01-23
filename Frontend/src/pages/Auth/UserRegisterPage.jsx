import { RegisterForm, AuthFooter, AuthHeader } from "../../components"
import { Link } from "react-router-dom"

export function UserRegisterPage() {
    return (
        <div
            className="grid min-h-screen w-full grid-rows-[1fr_8fr_1fr] items-center bg-black text-white"
            style={{
                // https://uiverse.io/csemszepp/modern-zebra-66
                "--s": "90px", // Tamaño
                "--c1": "#005839",
                "--c2": "#f2f2f2",
                "--c3": "#2e806e",
                background: `
                    repeating-conic-gradient(
                        from 30deg,
                        #0000 0 120deg,
                        var(--c3) 0 180deg
                    )
                    calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
                    repeating-conic-gradient(
                        from 30deg,
                        var(--c1) 0 60deg,
                        var(--c2) 0 120deg,
                        var(--c3) 0 180deg
                    )`,
                backgroundSize: "var(--s) calc(var(--s) * 0.577)",
            }}
        >
            <AuthHeader />
            <main className="grid place-items-center">
                <div className="border-avanti-black m-4 flex flex-col gap-4 rounded-6xl border-2 border-solid bg-[#f2f2f2f0] p-8 text-black">
                    <h1 className="mx-auto">¡Regístrate en Avanti!</h1>
                    <RegisterForm />
                    <p className="grid min-h-12 min-w-12 place-items-center">
                        <Link to="/login">
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
