import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Partners from "./pages/Partners";
import { PartnersContextProvider } from "./context/PartnersContext";
import { UserContextProvider } from "./context/UserContext";
import PartnerDetails from "./pages/PartnerDetails";
import StructureDetails from "./pages/StructureDetails";
import Navbar from "./components/Navbar";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import axios from "./api/axios";
import User from "./pages/User";
import Unauthorized from "./pages/Unauthorized";
import PrivateRoutes from "./pages/PrivateRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoutes from "./pages/AdminRoutes";

function App() {
    const [authorized, setAuthorized] = useState();
    const [role, setRole] = useState([]);

    //Verifying if the token is still valid in the backend
    const access = async (token) => {
        const response = await axios.get("/login/verify", { headers: { token: localStorage.token } });
        console.log(response);
        setRole(response.data.user_role);
    };

    return (
        <UserContextProvider>
            <PartnersContextProvider>
                <BrowserRouter>
                    <div className="lg:flex min-h-screen bg-main-bg relative z-0 overflow-auto">
                        <div className="min-h-full w-11/12 lg:w-3/4 mx-auto">
                            <Navbar authorized={authorized} setAuthorized={setAuthorized} />
                            <Routes>
                                <Route element={<PrivateRoutes authorized={authorized} setAuthorized={setAuthorized} access={access} />}>
                                    <Route element={<AdminRoutes role={role} />}>
                                        <Route path="/partners" element={<Partners />} />
                                        <Route path="/partners/:id/" element={<PartnerDetails />} />
                                        <Route path="/partners/:partnerId/:structureId" element={<StructureDetails />} />
                                        <Route path="/offers" element={<Offers />} />
                                    </Route>
                                    <Route path="/unauthorized" element={<Unauthorized />} />
                                    <Route path="/user/:id" element={<User role={role} />} />
                                </Route>
                                <Route path="/login" element={<Login setRole={setRole} setAuthorized={setAuthorized} />} />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </PartnersContextProvider>
            <ToastContainer />
        </UserContextProvider>
    );
}

export default App;
