import { Link } from 'react-router-dom';
import Logo from '../../assets/PCIU-Computer-Club-Logo.png'
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='min-h-[calc(100vh-80px)] flex items-center justify-center'>
            <div>
                <div className='flex justify-center'>
                    <img src={Logo} alt="Logo" className='w-38 my-3' />
                </div>
                <h1 className='lg:text-5xl text-xl font-semibold text-center text-blue-500'>PCCC Identity Portal</h1>
                <p className='text-center my-2'>
                    {
                        user ? 'Hola, Admin! You have access now. Try to do something cOOl.' : 'Hola, Admin. Please Login to Identify Club Members.'
                    }
                </p>
                <div className='flex justify-center'>
                    <Link to='/login' className='btn bg-blue-500 text-white my-3'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;