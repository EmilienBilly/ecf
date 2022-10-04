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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState();
    const authenticatedUser = localStorage.getItem("user");
    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    };

    const isAuth = async () => {
        try {
            const response = await axios.get("/login/verify", { headers: { token: localStorage.token } });
            response.data.isTrue === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
            setUserId(response.data.user_id);
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
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuth} />
                <div className="lg:flex min-h-screen bg-white relative z-0 overflow-auto">
                    <div className="min-h-full w-11/12 xl:w-3/4 mx-auto">
                        <Routes>
                            <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate replace to={`/user/${userId}`} />} />
                            <Route path="/partners" element={<Partners authenticatedUser={authenticatedUser} />} />
                            <Route path="/partners/:id/" element={isAuthenticated ? <PartnerDetails /> : <Navigate replace to="/login" />} />
                            <Route path="/partners/:partnerId/:structureId" element={isAuthenticated ? <StructureDetails /> : <Navigate replace to="/login" />} />
                            <Route path="/offers" element={isAuthenticated ? <Offers /> : <Navigate replace to="/login" />} />
                            <Route path="/user/:id" element={isAuthenticated ? <User /> : <Navigate replace to="/login" />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
            <ToastContainer />
        </PartnersContextProvider>
    );
}

export default App;
