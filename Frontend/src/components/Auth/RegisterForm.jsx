import { useState } from "react"
import { useForm } from "react-hook-form"
import { regexFormPatterns } from "../../utils/regex.js"

export function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const [registerInProcess, setRegisterInProcess] = useState(false)

    const sendData = async (data) => {
        setRegisterInProcess(true)

        const PAYLOAD = {
            name: data.name,
            email: data.email,
            password: data.password,
        }

        try {
            const registerResponse = await fetch(
                import.meta.env.VITE_BACK_BASE_URL + import.meta.env.VITE_BACK_USER_REGISTER_URL,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(PAYLOAD),
                },
            )

            const registerData = await registerResponse.json()

            // Just for testing
            console.log(registerData)
        } catch (error) {
            console.error("Error en el registro del usuario.", error)
        } finally {
            setRegisterInProcess(false)
        }
    }

    return (
        <form className="flex w-full flex-col items-center" id="registerForm" onSubmit={handleSubmit(sendData)}>
            <input
                id="registerFormName"
                type="text"
                placeholder="Nombre"
                autoComplete="true"
                {...register("name", { required: true, maxLength: 255 })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.name && errors.name.type === "required" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    Debes escribir un nombre
                </span>
            )}
            <input
                id="registerFormEmail"
                type="email"
                placeholder="Correo electrónico"
                autoComplete="true"
                {...register("email", { required: true, pattern: regexFormPatterns.email, maxLength: 255 })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.email && errors.email.type === "pattern" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    Debes escribir un correo electrónico
                </span>
            )}
            <input
                {...register("emailConfirmation")}
                id="registerFormEmailConfirmation"
                type="email"
                placeholder="Confirmar correo electrónico"
                {...register("emailConfirmation", { required: true, validate: (value) => watch("email") === value })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.emailConfirmation && errors.emailConfirmation.type === "validate" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    Los correos electrónicos no coinciden
                </span>
            )}
            <input
                {...register("password")}
                id="registerFormPassword"
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: true, pattern: regexFormPatterns.password, maxLength: 255 })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.password && errors.password.type === "pattern" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    La contraseña debe contener:
                    <ul className="list-disc px-4">
                        <li>Al menos un caracter minúscula</li>
                        <li>Al menos un caracter mayúscula</li>
                        <li>Al menos 8 caracteres de longitud</li>
                    </ul>
                </span>
            )}
            <input
                id="registerFormPasswordConfirmation"
                type="password"
                placeholder="Confirmar contraseña"
                {...register("passwordConfirmation", {
                    required: true,
                    validate: (value) => watch("password") === value,
                })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.passwordConfirmation && errors.passwordConfirmation.type === "validate" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    Las contraseñas no coinciden
                </span>
            )}
            <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-avanti bg-[length:200%_200%] bg-left p-3 font-medium text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-right focus:border-none focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            >
                {registerInProcess ? "AGUARDA UNOS INSTANTES" : "Registrarse en Avanti"}
            </button>
        </form>
    )
}
