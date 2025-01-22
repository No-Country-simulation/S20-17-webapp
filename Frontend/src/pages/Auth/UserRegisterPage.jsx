import { RegisterForm, AuthFooter, AuthHeader } from "../../components"
import { Link } from "react-router-dom"

export function UserRegisterPage() {
    return (
        <div
            className="grid h-screen w-full grid-rows-[1fr_8fr_1fr] items-center overflow-y-scroll bg-black text-white"
            style={{
                // https://uiverse.io/csemszepp/modern-zebra-66
                "--s": "90px", // Tamaño
                "--c1": "#121212",
                "--c2": "#d9d9d9",
                "--c3": "#3c3c3c",
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
                <div className="m-4 flex flex-col gap-4 rounded-6xl border-2 border-solid border-white bg-[#121212F0] p-8">
                    <h1 className="mx-auto">¡Regístrate en Avanti!</h1>
                    <RegisterForm />
                    <p className="mx-auto">
                        ¿Tienes una cuenta?
                        <span>
                            <Link to="/login"> ¡Inicia sesión aquí!</Link>
                        </span>
                    </p>
                </div>
            </main>
            <AuthFooter />
        </div>
    )
}
