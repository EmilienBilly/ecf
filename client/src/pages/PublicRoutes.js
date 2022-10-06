import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = ({ access, authorized, setAuthorized }) => {
    //Get the token previously stored in the local storage when loging in
    const auth = localStorage.getItem("token");

    useEffect(() => {
        const authorize = async () => {
            try {
                //GET request on the /verify route to verify that the token is valid
                await access(auth);
                setAuthorized(true);
            } catch (err) {
                setAuthorized(false);
            }
        };

        authorize();
    }, [access, auth, setAuthorized]);

    // IMPORTANT to avoid infinite loop because the state will have the value undefined for a short period of time after a refresh
    if (authorized === undefined) {
        return null;
    }

    return authorized ? <Navigate to="/partners" replace /> : <Outlet />;
};

export default PublicRoutes;
