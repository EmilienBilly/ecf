import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Partners from "./pages/Partners";
import { PartnersContextProvider } from "./context/PartnersContext";
import PartnerDetails from "./pages/PartnerDetails";
import StructureDetails from "./pages/StructureDetails";
import Navbar from "./components/Navbar";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import axios from "./api/axios";
import User from "./pages/User";
import PrivateRoutes from "./pages/PrivateRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    };

    const isAuth = async () => {
        try {
            const response = await axios.get("/login/verify", { headers: { token: localStorage.token } });
            response.data.isTrue === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        isAuth();
    });
    return (
        <PartnersContextProvider>
            <BrowserRouter>
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth} />
                <div className="lg:flex min-h-screen bg-white relative z-0 overflow-auto">
                    <div className="min-h-full w-11/12 xl:w-3/4 mx-auto">
                        <Routes>
                            <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
                                <Route path="/partners" element={<Partners />} />
                                <Route path="/partners/:id/" element={<PartnerDetails />} />
                                <Route path="/partners/:partnerId/:structureId" element={<StructureDetails />} />
                                <Route path="/offers" element={<Offers />} />
                                <Route path="/user/:id" element={<User />} />
                            </Route>
                            <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate replace to={"/partners"} />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
            <ToastContainer />
        </PartnersContextProvider>
    );
}

export default App;
