import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ isAuthenticated }) => {
    console.log(isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login/" />;
};

export default PrivateRoutes;
