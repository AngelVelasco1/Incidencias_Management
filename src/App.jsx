import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView } from "./views/Login";
import { DashboardCamperView } from "./views/DashboardCamper";
import { IncidencesCamper } from "./components/getIncidences";
import { IncidencesProvider } from "./context/IncidencesContext";
import { Protected } from "./Protected";
import { NotFound } from "./components/NotFound";

export const Router = () => {
    return (
        <IncidencesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginView />} />
                    <Route path="/dashboardCamper" element={<DashboardCamperView />}></Route>
                    <Route path="/incidences" element={<IncidencesCamper />}></Route>
                    <Route path="/edit" element={<DashboardCamperView />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </IncidencesProvider >

    )
}