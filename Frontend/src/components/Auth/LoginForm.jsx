export function LoginForm() {
    const loginInProcess = false

    return (
        <form
            className="flex w-full max-w-md flex-col items-center"
            id="loginForm"
        >
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
                className="w-full rounded-2xl bg-[#1f497d] p-3 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                {loginInProcess ? "AGUARDA UNOS INSTANTES" : "Iniciar Sesión"}
            </button>
        </form>
    )
}
