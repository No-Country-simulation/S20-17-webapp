export function LoginForm() {
    const loginInProcess = false

    return (
        <form className="flex w-full max-w-md flex-col items-center" id="loginForm">
            <input
                id="loginFormEmail"
                type="email"
                placeholder="Correo electrónico"
                required
                className="border-avanti-black focus:border-avanti-light-green focus:ring-avanti-light-green mb-3 w-full rounded-2xl border p-3 focus:outline-none focus:ring-2"
            />
            <input
                id="loginFormPassword"
                type="password"
                placeholder="Contraseña"
                required
                className="border-avanti-black focus:border-avanti-light-green focus:ring-avanti-light-green mb-3 w-full rounded-2xl border p-3 focus:outline-none focus:ring-2"
            />
            <button
                type="submit"
                className="focus:ring-avanti-light-green w-full rounded-2xl bg-[linear-gradient(92deg,_#1f497d,_#2e806e,_#005839)] bg-[length:200%_200%] bg-left p-3 font-medium text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-right focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                {loginInProcess ? "AGUARDA UNOS INSTANTES" : "Iniciar Sesión"}
            </button>
        </form>
    )
}
