import { Route, Routes, BrowserRouter } from "react-router-dom";
import Partners from "./pages/Partners";
import { PartnersContextProvider } from "./context/PartnersContext";
import PartnerDetails from "./pages/PartnerDetails";
import StructureDetails from "./pages/StructureDetails";
import Navbar from "./components/Navbar";
import Offers from "./pages/Offers";

function App() {
    return (
        <PartnersContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Partners />} />
                    <Route path="/partners/:id" element={<PartnerDetails />} />
                    <Route path="/partners/:partnerId/:structureId" element={<StructureDetails />} />
                    <Route path="/offers" element={<Offers />} />
                </Routes>
            </BrowserRouter>
        </PartnersContextProvider>
    );
}

export default App;
