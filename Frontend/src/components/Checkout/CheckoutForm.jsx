import { useState } from "react"
import { useForm } from "react-hook-form"
import { regexFormPatterns } from "../../utils/regex.js"

export function CheckoutForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            ammount: "10",
            cardNumber: "1234 1234 1234 1234",
            cardExpirationDate: "12/26",
            cardCVC: "123",
        },
    })

    const [paymentInProcess, setPaymentInProcess] = useState(false)

    const sendData = async (data) => {
        setPaymentInProcess(true)

        const PAYLOAD = {
            ammount: data.ammount,
            cardNumber: data.cardNumber,
            cardExpirationDate: data.cardExpirationDate,
            cardCVC: data.cardCVC,
        }

        const FAKE_PAYLOAD = {
            donator: "donadorDefault",
            project: "IdDelProyecto",
            paymentMethod: "card",
            paymentAmount: "10",
        }

        try {
            const paymentResponse = await fetch(
                import.meta.env.VITE_BACK_BASE_URL + import.meta.env.VITE_BACK_CONTRIBUTIONS_CREATE_URL,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(FAKE_PAYLOAD),
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
            <label htmlFor="paymentAmmount" className="mb-3 w-full rounded-2xl px-3">
                Monto a pagar (en $)
            </label>
            <input
                id="paymentAmmount"
                type="number"
                inputMode="numeric"
                prefix="$"
                min={1}
                placeholder="10"
                autoComplete="true"
                {...register("ammount", { required: true, maxLength: 255 })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.cardNumber && errors.cardNumber.type === "required" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    Debes escribir el número de tarjeta
                </span>
            )}
            <label htmlFor="paymentCardNumber" className="mb-3 w-full rounded-2xl px-3">
                Número de tarjeta
            </label>
            <input
                id="paymentCardNumber"
                type="text"
                inputMode="numeric"
                placeholder="1234 1234 1234"
                autoComplete="true"
                {...register("cardNumber", { required: true, maxLength: 255 })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.cardNumber && errors.cardNumber.type === "required" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    Debes escribir el número de tarjeta
                </span>
            )}
            <label htmlFor="paymentCardExpirationDate" className="mb-3 w-full rounded-2xl px-3">
                Fecha de vencimiento
            </label>
            <input
                id="paymentCardExpirationDate"
                type="text"
                placeholder="MM / AA"
                autoComplete="true"
                {...register("cardExpirationDate", {
                    required: true,
                    maxLength: 255,
                })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.cardExpirationDate && errors.cardExpirationDate.type === "pattern" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    Debes escribir una fecha de expiración
                </span>
            )}
            <label htmlFor="paymentCardCVC" className="mb-3 w-full rounded-2xl px-3">
                Código de seguridad
            </label>
            <input
                id="paymentCardCVC"
                type="text"
                placeholder="CVC"
                autoComplete="true"
                {...register("cardCVC", {
                    required: true,
                    maxLength: 255,
                })}
                className="mb-3 w-full rounded-2xl border border-avanti-black p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green"
            />
            {errors.cardExpirationDate && errors.cardExpirationDate.type === "pattern" && (
                <span role="alert" className="mb-3 w-full px-3 font-bold text-avanti-red">
                    Debes escribir una fecha de expiración
                </span>
            )}
            <div className="mb-3 flex min-h-12 w-full min-w-12 items-center gap-4 rounded-2xl p-3 focus:border-avanti-light-green focus:outline-none focus:ring-2 focus:ring-avanti-light-green">
                <input
                    type="checkbox"
                    className="appeareance-none min-h-8 checked:bg-avanti-green"
                    defaultChecked="true"
                />
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
