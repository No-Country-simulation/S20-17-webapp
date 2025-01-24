export function RegisterForm() {
    const registerInProcess = false

    return (
        <form className="flex w-full max-w-md flex-col items-center" id="registerForm">
            <input
                id="registerFormName"
                type="text"
                placeholder="Nombre"
                required
                className="border-avanti-black focus:ring-avanti-light-green focus:border-avanti-light-green mb-3 w-full rounded-2xl border p-3 focus:outline-none focus:ring-2"
            />
            <input
                id="registerFormEmail"
                type="email"
                placeholder="Correo electrónico"
                required
                className="border-avanti-black focus:border-avanti-light-green focus:ring-avanti-light-green mb-3 w-full rounded-2xl border p-3 focus:outline-none focus:ring-2"
            />
            <input
                id="registerFormEmailConfirmation"
                type="email"
                placeholder="Confirmar correo electrónico"
                required
                className="border-avanti-black focus:border-avanti-light-green focus:ring-avanti-light-green mb-3 w-full rounded-2xl border p-3 focus:outline-none focus:ring-2"
            />
            <input
                id="registerFormPassword"
                type="password"
                placeholder="Contraseña"
                required
                className="border-avanti-black focus:border-avanti-light-green focus:ring-avanti-light-green mb-3 w-full rounded-2xl border p-3 focus:outline-none focus:ring-2"
            />
            <input
                id="registerFormPasswordConfirmation"
                type="password"
                placeholder="Confirmar contraseña"
                required
                className="border-avanti-black focus:border-avanti-light-green focus:ring-avanti-light-green mb-3 w-full rounded-2xl border p-3 focus:outline-none focus:ring-2"
            />
            <button
                type="submit"
                className="focus:border-avanti-light-green focus:ring-avanti-light-green bg-gradient-avanti w-full rounded-2xl bg-[length:200%_200%] bg-left p-3 font-medium text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-right focus:border-none focus:outline-none focus:ring-2"
            >
                {registerInProcess ? "AGUARDA UNOS INSTANTES" : "Registrarse en Avanti"}
            </button>
        </form>
    )
}
