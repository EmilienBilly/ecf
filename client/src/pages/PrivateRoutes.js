import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ isAuthenticated }) => {
    return isAuthenticated === true ? <Outlet /> : <Navigate to="/login/" />;
};

export default PrivateRoutes;
