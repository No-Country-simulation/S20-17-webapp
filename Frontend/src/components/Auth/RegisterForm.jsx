export function RegisterForm() {
    const registerInProcess = false

    return (
        <form
            className="flex w-full max-w-md flex-col items-center"
            id="registerForm"
        >
            <input
                id="registerFormName"
                type="text"
                placeholder="Nombre"
                required
                className="mb-3 w-full rounded-2xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                id="registerFormEmail"
                type="email"
                placeholder="Correo electrónico"
                required
                className="mb-3 w-full rounded-2xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                id="registerFormEmailConfirmation"
                type="email"
                placeholder="Confirmar correo electrónico"
                required
                className="mb-3 w-full rounded-2xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                id="registerFormPassword"
                type="password"
                placeholder="Contraseña"
                required
                className="mb-3 w-full rounded-2xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                id="registerFormPasswordConfirmation"
                type="password"
                placeholder="Confirmar contraseña"
                required
                className="mb-3 w-full rounded-2xl border border-gray-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="registerFormSubmit"
                className="w-full rounded-2xl bg-[#1f497d] p-3 font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                {registerInProcess
                    ? "AGUARDA UNOS INSTANTES"
                    : "Registrarse en ByteWise"}
            </button>
        </form>
    )
}
