import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Partners from "./pages/Partners";
import { PartnersContextProvider } from "./context/PartnersContext";
import PartnerDetails from "./pages/PartnerDetails";
import StructureDetails from "./pages/StructureDetails";
import Navbar from "./components/Navbar";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import axios from "axios";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    };

    const isAuth = async () => {
        try {
            const response = await axios.get("/login/verify", { headers: { token: localStorage.token } });

            console.log(localStorage);

            response.data === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
            console.log(isAuthenticated);
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
                <Navbar />
                <div className="lg:flex min-h-screen bg-white relative z-0 overflow-auto">
                    <div className="w-11/12 xl:w-3/4 mx-auto">
                        <Routes>
                            <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate replace to="/" />} />
                            <Route path="/" element={<Partners />} />
                            <Route path="/partners/:id" element={<PartnerDetails />} />
                            <Route path="/partners/:partnerId/:structureId" element={<StructureDetails />} />
                            <Route path="/offers" element={<Offers />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </PartnersContextProvider>
    );
}

export default App;
