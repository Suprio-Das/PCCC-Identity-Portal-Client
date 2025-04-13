import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const PrivateRoutes = () => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <p>Data is loading...</p>
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoutes;