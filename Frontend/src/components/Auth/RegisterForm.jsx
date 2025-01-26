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

    return (
        <form
            className="flex w-full max-w-md flex-col items-center"
            id="registerForm"
            onSubmit={handleSubmit((data) => console.log(JSON.stringify(data)))}
        >
            <input
                id="registerFormName"
                type="text"
                placeholder="Nombre"
                autoComplete="true"
                {...register("name", { required: true, maxLength: 255 })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            <input
                id="registerFormEmail"
                type="email"
                placeholder="Correo electrónico"
                autoComplete="true"
                {...register("email", { required: true, pattern: regexFormPatterns.email })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {/* {errors.email && errors.email.type === "pattern" && <span role="alert">FORMATO INVALIDO</span>} */}
            <input
                {...register("emailConfirmation")}
                id="registerFormEmailConfirmation"
                type="email"
                placeholder="Confirmar correo electrónico"
                {...register("emailConfirmation", { required: true, validate: (value) => watch("email") === value })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {/* {errors.emailConfirmation && errors.emailConfirmation.type === "validate" && (
                <span role="alert">NO COINCIDEN</span>
            )} */}
            <input
                {...register("password")}
                id="registerFormPassword"
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: true, pattern: regexFormPatterns.password })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {/* {errors.password && errors.password.type === "pattern" && <span role="alert">FORMATO INVALIDO</span>} */}
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
            {/* {errors.passwordConfirmation && errors.passwordConfirmation.type === "validate" && (
                <span role="alert">NO COINCIDEN</span>
            )} */}
            <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-avanti bg-[length:200%_200%] bg-left p-3 font-medium text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-right focus:border-none focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            >
                {registerInProcess ? "AGUARDA UNOS INSTANTES" : "Registrarse en Avanti"}
            </button>
        </form>
    )
}
