export function LoginForm() {
    const loginInProcess = false

    return (
        <form className="flex w-full max-w-md flex-col items-center" id="loginForm">
            <input
                id="loginFormEmail"
                type="email"
                placeholder="Correo electrónico"
                required
                className="mb-3 w-full rounded-2xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                id="loginFormPassword"
                type="password"
                placeholder="Contraseña"
                required
                className="mb-3 w-full rounded-2xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="w-full rounded-2xl bg-[linear-gradient(92deg,_#1f497d,_#2e806e,_#005839)] bg-[length:200%_200%] bg-left p-3 font-medium text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                {loginInProcess ? "AGUARDA UNOS INSTANTES" : "Iniciar Sesión"}
            </button>
        </form>
    )
}
