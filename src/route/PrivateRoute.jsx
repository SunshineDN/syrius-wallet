import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    } else {
        return <Outlet />;
    }
};

export default PrivateRoute;