import { useState } from "react"
import { useForm } from "react-hook-form"
import { regexFormPatterns } from "../../utils/regex.js"

export function LoginForm() {
    const [loginInProcess, setLoginInProcess] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "hello@example.com",
            password: "123456",
        },
    })

    const sendData = async (data) => {
        setLoginInProcess(true)

        try {
            const loginResponse = await fetch(
                import.meta.env.VITE_BACK_BASE_URL + import.meta.env.VITE_BACK_USER_LOGIN_URL,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                },
            )

            const loginData = await loginResponse.json()
            localStorage.setItem("userLogin", JSON.stringify(loginData))
        } catch (error) {
            console.error("Error en el inicio de sesión.", error)
        } finally {
            setLoginInProcess(false)
        }
    }

    return (
        <form className="flex w-full max-w-md flex-col items-center" id="loginForm" onSubmit={handleSubmit(sendData)}>
            <input
                id="loginFormEmail"
                type="email"
                placeholder="Correo electrónico"
                required
                {...register("email", { required: true, pattern: regexFormPatterns.email, maxLength: 255 })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.email && errors.email.type === "pattern" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    Debes escribir un correo electrónico
                </span>
            )}
            <input
                id="loginFormPassword"
                type="password"
                placeholder="Contraseña"
                required
                {...register("password", { required: true, maxLength: 255 })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-avanti bg-[length:200%_200%] bg-left p-3 font-medium text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-right focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            >
                {loginInProcess ? "AGUARDA UNOS INSTANTES" : "Iniciar Sesión"}
            </button>
        </form>
    )
}
