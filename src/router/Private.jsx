
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Private = ({children}) => {
    const {user, loading}= useAuth()
    const location = useLocation();
    if (loading) {
        return <div className="flex flex-row justify-center items-center">
            <span className="loading loading-spinner loading-lg "></span>
        </div>
        
    }
    if (user) {
        return children
        
    }
    return <Navigate state={location.pathname} to={'/myAccount'}></Navigate>
};

export default Private;