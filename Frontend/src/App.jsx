import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage, UserLoginPage, UserRegisterPage, WIPPage } from "./pages"

function App() {
    const ERROR_MESSAGE = "¡UPS! Esa página no existe..."

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/search" element={<WIPPage />} />
                <Route path="/proyect/:proyectId" element={<WIPPage />} />
                <Route path="/checkout/:proyectId" element={<WIPPage />} />
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/register" element={<UserRegisterPage />} />
                <Route path="/about" element={<WIPPage />} />
                <Route path="/recovery" element={<WIPPage />} />
                <Route path="/mission" element={<WIPPage />} />
                <Route path="/contact" element={<WIPPage />} />
                <Route path="/tips" element={<WIPPage />} />
                <Route path="/process" element={<WIPPage />} />
                <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
