import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost text-xl">PCCC Identity Portal</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;