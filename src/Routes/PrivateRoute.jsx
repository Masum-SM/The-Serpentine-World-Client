import { useContext } from "react";
import { AuthContext } from "../assets/provider/AuthProvider";
import { Navigate ,useLocation} from "react-router";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(user){
        return children;
    }
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;