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
import PrivateRoutes from "./pages/PrivateRoutes";
import PublicRoutes from "./pages/PublicRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [authorized, setAuthorized] = useState();

    //Verifying if the token is still valid in the backend
    const access = async (token) => {
        await axios.get("/login/verify", { headers: { token: localStorage.token } });
    };

    return (
        <UserContextProvider>
            <PartnersContextProvider>
                <BrowserRouter>
                    <Navbar authorized={authorized} setAuthorized={setAuthorized} />
                    <div className="lg:flex min-h-screen bg-white relative z-0 overflow-auto">
                        <div className="min-h-full w-11/12 xl:w-3/4 mx-auto">
                            <Routes>
                                <Route element={<PrivateRoutes authorized={authorized} setAuthorized={setAuthorized} access={access} />}>
                                    <Route path="/partners" element={<Partners />} />
                                    <Route path="/partners/:id/" element={<PartnerDetails />} />
                                    <Route path="/partners/:partnerId/:structureId" element={<StructureDetails />} />
                                    <Route path="/offers" element={<Offers />} />
                                    <Route path="/user/:id" element={<User />} />
                                </Route>
                                <Route element={<PublicRoutes authorized={authorized} setAuthorized={setAuthorized} access={access} />}>
                                    <Route path="/login" element={<Login />} />
                                </Route>
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
                <ToastContainer />
            </PartnersContextProvider>
        </UserContextProvider>
    );
}

export default App;
