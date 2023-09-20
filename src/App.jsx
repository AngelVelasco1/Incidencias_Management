import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView } from "./views/Login";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginView />} />
            </Routes>
        </BrowserRouter>

    )
}