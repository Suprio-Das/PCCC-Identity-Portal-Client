import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const PrivateRoutes = () => {
    const { user, loading } = useContext(AuthContext);
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;