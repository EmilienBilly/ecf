import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ isAuthenticated }) => {
    console.log(isAuthenticated);
    return isAuthenticated === true ? <Outlet /> : <Navigate to="/login/" />;
};

export default PrivateRoutes;
