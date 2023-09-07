import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../assets/provider/AuthProvider";

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const hadndleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false);
        }
    }, []);
    const handleMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
        }
        else {
            document.documentElement.classList.add('dark')
        }
        setIsDarkMode(!isDarkMode)
        localStorage.theme === 'dark' ? localStorage.theme = 'light' : localStorage.theme = 'dark'
    }



    const menuItems = <>
        <li className='nav_li nav_btn'><Link to="/" >Home</Link></li>
        <li className='nav_li nav_btn'><Link to="/snake" >Snakes</Link></li>
        <li className='nav_li nav_btn'><Link to="/medicine" >Medicines</Link></li>
        <li className='nav_li nav_btn'><Link to="/book" >Books</Link></li>
        <li className='nav_li nav_btn'><Link to="/process" >Medeicine Proceesing</Link></li>
        <li className='nav_li nav_btn'><Link to="/contact" >Contact</Link></li>




        {/* {
            user ?
                <> <span>{user?.displayName}</span>
                    <button onClick={hadndleLogOut} className="btn btn-gost"><i className="fas fa-sign-in-alt"> </i> Logout</button> </>
                :
                <><li className='nav_li'><Link to="/login" ><i className="fas fa-sign-in-alt"> </i> Login</Link></li> </>
        } */}
    </>


    return (
        <>

            <div className="navbar nv_bg lg:px-32">
                <div className="navbar-start">

                    <Link to="/" className="btn btn-ghost normal-case text-sm  lg:text-xl nav_icon_re sm:text-sm lg:text-xl"> <img className='sm : hidden lg:inline' src="https://i.ibb.co/0yHs5zv/sanke-logo.png" alt="" /> <p className="mt-4">The <span className='zero'> Serpentine </span>World</p> </Link>
                </div>

                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal ">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <p className='px-4 py-2 nav_li nav_btn cursor-pointer bg-white-800 dark:bg-black-800 lg:me-8 dark_btn hidden lg:block ' onClick={handleMode}>
                        {isDarkMode ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                    </p>
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn rounded-full border-black icon_clr ">

                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                            <i className="fa-solid fa-bars text-2xl"></i>
                            {
                                user ? <><span>{user.displayName}</span> </> : <><i className="fa-regular fa-circle-user text-2xl"></i></>
                            }


                        </label>
                        <div className="flex items-center justify-center me-16 ">
                            <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-64 lg:mt-24 lg:w-52 shadow  drop_bg rounded-box">
                                <div className=" lg:hidden">
                                    {menuItems}
                                </div>
                                <div>
                                    {
                                        user ?
                                            <>
                                                {/* <span>{user?.displayName}</span> */}
                                                <li className='nav_li'><Link to="/dashboard" >Dashborad</Link></li>
                                                <button onClick={hadndleLogOut} className="btn"><i className="fas fa-sign-in-alt"> </i> Logout</button> </>
                                            :
                                            <>
                                                <li className='nav_li'><Link to="/login" >Login</Link></li>
                                                <li className='nav_li'><Link to="/signup" >Register</Link></li>
                                            </>
                                    }
                                </div>

                            </ul>


                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default NavBar;