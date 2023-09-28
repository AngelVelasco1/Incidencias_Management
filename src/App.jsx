import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView } from "./views/Login";
import { DashboardCamperView } from "./views/DashboardCamper";
import { Protected } from "./Protected";
import { NotFound } from "./components/NotFound";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginView />} />

                <Route element= {<Protected/>}>
                    <Route path="/dashboardCamper" element={<DashboardCamperView/>}></Route>
                </Route>

                <Route path= "*" element={<NotFound/>}></Route>
            </Routes>
        
        </BrowserRouter>

    )
}