import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ErrorPage, LandingPage, UserLoginPage, UserRegisterPage, WIPPage } from "./pages"

function App() {
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
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
