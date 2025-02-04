import { Link } from "react-router-dom"

export function CheckoutHeader() {
    return (
        <header className="flex h-full items-center justify-center bg-avanti-white py-4 text-black">
            <h2>
                <Link to="/">AVANTI</Link>
            </h2>
        </header>
    )
}
