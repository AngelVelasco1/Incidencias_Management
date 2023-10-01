import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView } from "./views/Login";
import { CamperDashboardView } from "./views/CamperDashboard";
import { TrainerDashboardView } from "./views/TrainerDashboard";
import { CamperIncidences } from "./components/CamperIncidences";
import { TrainerIncidences } from "./components/TrainerIncidences";
import { IncidencesProvider } from "./context/IncidencesContext";
import { NotFound } from "./components/NotFound";

export const Router = () => {
    return (
        <IncidencesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginView />} />
                    <Route path="/dashboardCamper" element={<CamperDashboardView />}></Route>
                    <Route path="/camperIncidences" element={<CamperIncidences />}></Route>
                    <Route path="/edit" element={<CamperDashboardView />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Routes>
                    <Route path="/" element={<LoginView />} />
                    <Route path="/dashboardTrainer" element={<TrainerDashboardView />}></Route>
                    <Route path="/trainerIncidences" element={<TrainerIncidences />}></Route>
                    <Route path="/edit" element={<TrainerDashboardView />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </IncidencesProvider >

    )
}