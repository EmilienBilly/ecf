import { Outlet, Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ role }) => {
    const location = useLocation();

    return role === 1 ? <Outlet context={role} /> : <Navigate to="/unauthorized" replace state={{ from: location }} />;
};

export default AdminRoutes;
