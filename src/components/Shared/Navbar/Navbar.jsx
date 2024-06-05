import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>

        <li className="text-lg font-medium mr-2">
            <NavLink to="/">Home</NavLink>
        </li>

        <li className="text-lg font-medium mr-2">
            <NavLink to="/agents">Agents</NavLink>
        </li>

        <li className="text-lg font-medium mr-2">
            <NavLink to="/update-profile">Update Profile</NavLink>
        </li>

        <li className="text-lg font-medium mr-2">
            <NavLink to="/user-profile">User Profile</NavLink>
        </li>

    </>

    return (

        <div className="navbar">
            <div className="navbar-start">

                {/* Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    {/* Responsive */}
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>

                </div>

                <Link to={"/"}>
                    <button className="w-48 md:w-auto text-2xl md:text-4xl  font-bold">Residency <span className="text-[#2f7e4b]">Hub</span></button>
                </Link>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">

                <div tabIndex={0} role="button"
                    className="btn btn-ghost btn-circle avatar mr-2">
                    <div className="w-10 rounded-full">
                        {/* <img src={userDefaultPhoto} /> */}
                    </div>
                </div>
                <div>
                    {
                        user ?
                            <button onClick={handleLogOut}
                            className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white text-lg font-medium px-3 py-1 md:px-6 md:py-2 rounded-lg">Log Out</button>
                            :
                            <Link to="/login">
                                <button className="bg-[#1a472a] hover:bg-[#2f7e4b] text-white text-lg font-medium px-3 py-1 md:px-6 md:py-2 rounded-lg">Log In</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;


