import { useContext } from "react";
import { AuthContext } from "./Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
let {isAuth}=useContext(AuthContext);


if(!isAuth){
    return <Navigate to="/"/>
}

return children
}

export default PrivateRoute;
