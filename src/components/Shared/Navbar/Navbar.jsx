import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const menus = <>

        <li className="text-lg font-medium mr-2">
            <NavLink to="/">Home</NavLink>
        </li>

        <li className="text-lg font-medium mr-2">
            <NavLink to="/agents">Agents</NavLink>
        </li>

        <li className="text-lg font-medium mr-2">
            <NavLink to="/property">Property</NavLink>
        </li>

        <li className="text-lg font-medium mr-2">
            <NavLink to="/update-profile">Update Profile</NavLink>
        </li>

    </>

    return (

        // <div className="navbar">
        //     <div className="navbar-start">

        //         {/* Dropdown */}
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </div>

        //             {/* Responsive */}
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 {
        //                     menus
        //                 }
        //             </ul>

        //         </div>

        //         <Link to={"/"}>
        //             <button className="w-48 md:w-auto text-2xl md:text-4xl  font-bold">Residency <span className="text-[#2f7e4b]">Hub</span></button>
        //         </Link>

        //     </div>

        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             {
        //                 menus
        //             }
        //         </ul>
        //     </div>

        //     {/* Navbar End */}
        //     <div className="navbar-end">

        //         <div tabIndex={0} role="button"
        //             className="btn btn-ghost btn-circle avatar mr-2">
        //             <div className="w-10 rounded-full">
        //             </div>
        //         </div>

        //         <div>
        //             {
        //                 user?.email ?

        //                     <div className="flex items-center gap-3">
        //                         <div className="tooltip tooltip-bottom" data-tip={user.email}>
        //                             <div className="dropdown">
        //                                 <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        //                                     <div className="w-10 rounded-full">

        //                                         <img alt="User img" src="https://i.ibb.co/BP1tpQC/user-Photo.png" />

        //                                     </div>
        //                                 </div>

        //                                 <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-lg w-36">

        //                                     <li>
        //                                         <Link to="/user-profile">User Profile</Link>
        //                                     </li>

        //                                     <li>
        //                                         <Link to="/update-profile">Update Profile</Link>
        //                                     </li>

        //                                     <li>
        //                                         <button onClick={handleLogOut}>Log Out</button>
        //                                     </li>

        //                                 </ul>
        //                             </div>
        //                         </div>

        //                         <button onClick={handleLogOut}
        //                             className="bg-[#2f7e4b] hover:bg-[#1a472a]  text-white text-lg font-medium px-3 py-1 md:px-6 md:py-2 rounded-lg">
        //                             Log Out
        //                         </button>
        //                     </div>

        //                     :
        //                     <Link to="/login">
        //                         <button className="bg-[#2f7e4b] hover:bg-[#1a472a] text-white text-lg font-medium px-3 py-1 md:px-6 md:py-2 rounded-lg">Log In</button>
        //                     </Link>
        //             }

        //         </div>

        //     </div>
        // </div>

        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menus}
                    </ul>
                </div>
                <Link to={"/"}>
                    <button className="w-48 md:w-auto text-2xl md:text-4xl  font-bold">Residency <span className="text-[#2f7e4b]">Hub</span></button>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menus}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center gap-3">
                        <div className="tooltip tooltip-bottom" data-tip={user.email}>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="User img" src={user.photoURL || "https://i.ibb.co/BP1tpQC/user-Photo.png"} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-lg w-36">
                                    <li>
                                        <Link to="/user-profile">User Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/update-profile">Update Profile</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleLogOut}>Log Out</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="bg-[#2f7e4b] hover:bg-[#1a472a] text-white text-lg font-medium px-3 py-1 md:px-6 md:py-2 rounded-lg">
                            Log Out
                        </button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="bg-[#2f7e4b] hover:bg-[#1a472a] text-white text-lg font-medium px-3 py-1 md:px-6 md:py-2 rounded-lg">Log In</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;


{/* <div className="navbar bg-base-100">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="flex-none gap-2">
        <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>

        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>

    </div>
</div> */}