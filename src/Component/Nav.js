import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../asset/logo-removebg-preview.png'


const Nav = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <div className="navbar bg-base-100 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/home'}>Home</Link></li>
                            <li><Link to={'/colorPicker'}>ColorPicker</Link></li>
                        </ul>
                    </div>
                    <Link to={'/home'} ><img className='w-36' src={logo} alt="logo" /></Link>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-white font-bold' : 'text-black fw-semibold'} to={'/home'}>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-white font-bold' : 'text-black fw-semibold'} to={'/colorPicker'}>ColorPicker</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;