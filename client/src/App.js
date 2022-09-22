import { Route, Routes, BrowserRouter } from "react-router-dom";
import Partners from "./pages/Partners";
import { PartnersContextProvider } from "./context/PartnersContext";
import PartnerDetails from "./pages/PartnerDetails";
import StructureDetails from "./pages/StructureDetails";
import Navbar from "./components/Navbar";
import Offers from "./pages/Offers";
import Login from "./pages/Login";

function App() {
    return (
        <PartnersContextProvider>
            <BrowserRouter>
                <Navbar />
                <div className="lg:flex min-h-screen bg-white relative z-0 overflow-auto">
                    <div className="w-11/12 xl:w-3/4 mx-auto">
                        <Routes>
                            <Route path="/login" element={<Login />} />
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
