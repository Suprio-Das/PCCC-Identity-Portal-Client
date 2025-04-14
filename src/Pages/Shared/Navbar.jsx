import { useContext } from 'react';
import PCIU_Computer_Club_Logo from '../../assets/PCIU-Computer-Club-Logo.png';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext);
    const handleLogOutUser = () => {
        handleLogOut()
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <div className='flex items-center gap-2'>
                    <img src={PCIU_Computer_Club_Logo} alt="PCCC_Identity_Logo" className='w-[60px]' />
                    <Link to='/' className='text-xl font-semibold'>PCCC Identity Portal</Link>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    {
                        user ? <li><NavLink to="/dashboard">Dashboard</NavLink></li> : ''
                    }
                    {
                        user
                            ? <li><button onClick={handleLogOutUser}>Logout</button></li>
                            : <li><NavLink to="/login">Login</NavLink></li>
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;