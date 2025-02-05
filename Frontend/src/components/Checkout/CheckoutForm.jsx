import { useState } from "react"
import { useForm } from "react-hook-form"
import { regexFormPatterns } from "../../utils/regex.js"

export function CheckoutForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const [paymentInProcess, setPaymentInProcess] = useState(false)

    const sendData = async (data) => {
        setPaymentInProcess(true)

        const PAYLOAD = {
            name: data.name,
            email: data.email,
            password: data.password,
        }

        try {
            const paymentResponse = await fetch(
                import.meta.env.VITE_BACK_BASE_URL + import.meta.env.VITE_BACK_USER_REGISTER_URL,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(PAYLOAD),
                },
            )

            const paymentData = await paymentResponse.json()

            // Just for testing
            console.log(paymentData)
        } catch (error) {
            console.error("Error en la acreditación del pago.", error)
        } finally {
            setPaymentInProcess(false)
        }
    }

    return (
        <form className="flex w-full flex-col items-center" id="paymentForm" onSubmit={handleSubmit(sendData)}>
            <input
                id="paymentFormName"
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
                id="paymentFormEmail"
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
                id="paymentFormEmailConfirmation"
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
            <div className="mb-3 flex min-h-12 w-full min-w-12 items-center gap-4 rounded-2xl p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green">
                <input type="checkbox" className="min-h-8 min-w-8" />
                <span>Recordar información de pago</span>
            </div>
            <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-avanti bg-[length:200%_200%] bg-left p-3 font-medium text-white shadow-md transition-[background-position] duration-500 ease-in-out hover:bg-right focus:border-none focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            >
                {paymentInProcess ? "AGUARDA UNOS INSTANTES" : "Completar pago"}
            </button>
        </form>
    )
}
