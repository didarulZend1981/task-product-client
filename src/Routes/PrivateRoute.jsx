import { Navigate, useLocation } from 'react-router';
import useAuthHook from '../providers/useAuthHook';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuthHook();
    const location = useLocation();
    // console.log(location.pathname);

    if(loading) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;