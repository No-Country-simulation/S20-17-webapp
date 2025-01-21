import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage, UserLoginPage, UserRegisterPage } from "./pages"

function App() {
    const WIP_MESSAGE = "Página aún en construcción..."
    const ERROR_MESSAGE = "¡UPS! Esa página no existe..."

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/search" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="/proyect/:proyectId" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="/checkout/:proyectId" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/register" element={<UserRegisterPage />} />
                <Route path="/about" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="/recovery" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="/mission" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="/contact" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="/tips" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="/process" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
