import { useContext } from 'react'
import PCIU_Computer_Club_Logo from '../../assets/PCIU-Computer-Club-Logo.png'
import { Link, NavLink } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext)

    const handleLogOutUser = () => {
        handleLogOut()
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    {
                        user && (
                            <>
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                </ul>
                            </>
                        )
                    }
                </div>
                <div className='flex items-center gap-2'>
                    <img src={PCIU_Computer_Club_Logo} alt="PCCC_Identity_Logo" className='w-[60px]' />
                    <Link to='/' className='text-xl font-semibold'>PCCC Identity Portal</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                {
                    user && (
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        </ul>
                    )
                }
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                {
                    user
                        ? <button onClick={handleLogOutUser} className="btn">Logout</button>
                        : <NavLink to="/login" className="btn">Login</NavLink>
                }
            </div>
        </div>
    )
}

export default Navbar