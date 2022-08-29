import { Route, Routes, BrowserRouter } from "react-router-dom";
import Partners from "./pages/Partners";
import { PartnersContextProvider } from "./context/PartnersContext";
import PartnerDetails from "./pages/PartnerDetails";

function App() {
    return (
        <PartnersContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Partners />} />
                    <Route path="/partner/:id" element={<PartnerDetails />} />
                </Routes>
            </BrowserRouter>
        </PartnersContextProvider>
    );
}

export default App;
