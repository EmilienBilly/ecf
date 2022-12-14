import { useEffect } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ access, authorized, setAuthorized }) => {
    const location = useLocation();

    //Get the token previously stored in the local storage when loging in
    const auth = localStorage.getItem("token");

    useEffect(() => {
        const authorize = async () => {
            try {
                //GET request on the /verify route to verify that the token is valid
                await access(auth);
                setAuthorized(true);
            } catch (error) {
                setAuthorized(false);
            }
        };
        authorize();
    }, [access, auth, setAuthorized]);

    // IMPORTANT to avoid infinite loop because the state will have the value undefined for a short period of time after a refresh
    if (authorized === undefined) {
        return null;
    }

    return authorized ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoutes;
