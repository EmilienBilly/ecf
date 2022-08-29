import { Route, Routes, BrowserRouter } from "react-router-dom";
import Partners from "./pages/Partners";
import { PartnersContextProvider } from "./context/PartnersContext";
import PartnerDetails from "./pages/PartnerDetails";
import StructureDetails from "./pages/StructureDetails";

function App() {
    return (
        <PartnersContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Partners />} />
                    <Route path="/partners/:id" element={<PartnerDetails />} />
                    <Route path="/structures/:id" element={<StructureDetails />} />
                </Routes>
            </BrowserRouter>
        </PartnersContextProvider>
    );
}

export default App;
