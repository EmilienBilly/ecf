import { Route, Routes, BrowserRouter } from "react-router-dom";
import Partners from "./pages/Partners";
import { PartnersContextProvider } from "./context/PartnersContext";

function App() {
    return (
        <PartnersContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Partners />} />
                </Routes>
            </BrowserRouter>
        </PartnersContextProvider>
    );
}

export default App;
