

const NavBar = () => {

    const navOption = <>
        <li><a>Item 1</a></li>

        <li><a>Item 3</a></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <a className="btn btn-ghost normal-case text-xl">THE SERPENTINE WORLD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;