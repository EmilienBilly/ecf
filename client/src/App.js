import { Route, Routes, BrowserRouter } from "react-router-dom";
import Partners from "./pages/Partners";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Partners />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
