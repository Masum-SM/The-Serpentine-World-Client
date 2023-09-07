
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../assets/provider/AuthProvider";

const Dashboard = () => {

  const { user, logout } = useContext(AuthContext);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch(`https://serpentine-world-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user?.email]);


  console.log(admin)
  const hadndleLogOut = () => {
    logout()
      .then(() => { 
        navigate("/");
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <div className="">
        <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden"><i className="fa-solid fa-bars"></i></label>
      </div>


      <div className="dash_bg_top text-center text-white py-4 text-2xl hidden  lg:block ">
        <div className="flex items-center justify-center">

          <Link to="/" className="btn btn-ghost normal-case  nav_icon_re lg:text-xl dash_logo_name"> <img className='sm : hidden lg:inline' src="https://i.ibb.co/0yHs5zv/sanke-logo.png" alt="" /> <p className="mt-4">The <span className="zero">serpentine</span> world</p></Link>



          <h1>DASHBOARD</h1>
        </div>
      </div>

      <div className="drawer lg:drawer-open  ">


        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center  bg-gray-200 bg_desh_containr">

          <div className="desh_container mx-auto text-center">

            <img className="mx-auto" src="https://i.ibb.co/0yHs5zv/sanke-logo.png" alt="" />
            <p className="mt-2 desh_logo_name">The <span className="d_zero">serpentine</span> world</p>
            <h1 className="au_dash">{admin? "ADMIN":"USER"} DASHBOARD</h1>

          </div>

          <Outlet>

          </Outlet>


        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 min-h-full dash_bg text-base-content text-xl">

            <li> <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden"><i className="fa-regular fa-circle-xmark"></i></label></li>

            <div className="mx-auto mb-8">
              <img className="mx-auto dash_user_img rounded-full" src={user?.photoURL} alt="" />
              <p>{user?.displayName}</p>
              <p className="text-center">Role : {admin?"Admin":"User"}</p>
            </div>


            {
              !admin ? (
                <div>
                  <li> <Link to="/dashboard/payment" > <i className="fa-solid fa-wallet des_icon me-2"></i> Payment</Link> </li>
                  <li> <Link to="/dashboard/myorder" ><i className="fa-solid fa-cart-shopping des_icon me-2"></i> My Order</Link> </li>
                </div>
              ) : (
                <div>

                  <li> <Link to="/dashboard/makeadmin" ><i className="fa-solid fa-screwdriver-wrench des_icon me-2"></i> Make Admin</Link> </li>

                  <li> <Link to="/dashboard/addsnake" ><i className="fa-solid fa-staff-snake des_icon me-2"></i> Add Sanke</Link> </li>

                  <li> <Link to="/dashboard/addmedicine" ><i className="fa-solid fa-prescription-bottle-medical des_icon me-2"></i> Add Medicine</Link> </li>

                  <li> <Link to="/dashboard/addmebook" ><i className="fa-solid fa-book des_icon me-2"></i> Add Book</Link> </li>

                  <li> <Link to="/dashboard/managesnake" ><i className="fa-solid fa-drum-steelpan des_icon me-2"></i> Manage Sanake</Link> </li>
                  <li> <Link to="/dashboard/managemedicine" ><i className="fa-solid fa-house-medical des_icon me-2"></i> Manage Medicine</Link> </li>

                  <li> <Link to="/dashboard/managebook" ><i className="fa-solid fa-book-medical des_icon me-2"></i> Manage Book</Link> </li>
                  <li className="mb-4"> <Link to="/dashboard/manageorder" ><i className="fa-solid fa-list-check des_icon me-2 "></i> Manage Order</Link> </li>
                </div>
              )
            }

            <button onClick={hadndleLogOut} className="btn btn_logout bg-transparent "><i className="fas fa-sign-in-alt"> </i> Logout</button>

          </ul>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;