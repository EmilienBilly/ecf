import { Route, Routes, BrowserRouter } from "react-router-dom";
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

function App() {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState();
    const [userId, setUserId] = useState();
    // const setAuth = (boolean) => {
    //     setIsAuthenticated(boolean);
    // };

    const isAuth = async () => {
        try {
            const response = await axios.get("/login/verify", { headers: { token: localStorage.token } });
            // response.data.isTrue === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
            setRole(response.data.user_role);
            setUserId(response.data.user_id);
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
                            <Route path="/login" element={<Login />} />
                            <Route path="/partners" element={<Partners role={role} user_id={userId} />} />
                            <Route path="/partners/:id/" element={<PartnerDetails />} />
                            <Route path="/partners/:partnerId/:structureId" element={<StructureDetails />} />
                            <Route path="/offers" element={<Offers />} />
                            <Route path="/user/:id" element={<User />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </PartnersContextProvider>
    );
}

export default App;
