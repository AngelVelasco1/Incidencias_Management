import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginView } from "./views/Login";
import { CamperDashboardView } from "./views/CamperDashboard";
import { CamperIncidences } from "./components/CamperIncidences";
import { IncidencesProvider } from "./context/IncidencesContext";
import { Protected } from "./Protected";
import { NotFound } from "./components/NotFound";
import { AuthProvider } from "./context/AuthContext";


export const Router = () => {
    return (
        <AuthProvider>
            <IncidencesProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Protected />}>
                            <Route index element={<LoginView />} />
                            <Route path="/dashboardCamper" element={<CamperDashboardView />}></Route>
                            <Route path="/camperIncidences" element={<CamperIncidences />}></Route>
                            <Route path="/edit" element={<CamperDashboardView />}></Route>
                        </Route>

                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </BrowserRouter>
            </IncidencesProvider>
        </AuthProvider>

    )
}
