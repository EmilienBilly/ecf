import { Outlet, Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ role }) => {
    const location = useLocation();

    return role === 1 ? <Outlet /> : <Navigate to="/unauthorized" replace state={{ from: location }} />;
};

export default AdminRoutes;
