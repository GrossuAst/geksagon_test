import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, isLoggedIn, ...props }) {
    return(
        isLoggedIn ? <Component {...props} /> : <Navigate to='/login' replace />
    ) 
}

export default ProtectedRoute;