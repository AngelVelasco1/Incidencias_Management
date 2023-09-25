import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView } from "./views/Login";
import { DashboardCamperView } from "./views/DashboardCamper";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginView />} />
                <Route path="/dashboardCamper" element={<DashboardCamperView />} />

            </Routes>
         
        </BrowserRouter>

    )
}