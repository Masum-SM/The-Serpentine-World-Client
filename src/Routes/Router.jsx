import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Medicines from "../Pages/Medicine/Medicines";
import SnakeCards from "../Pages/SnakeCards/SnakeCards";
import SnakeInfo from "../Pages/SnakeCards/SnakeInfo";
import MedicineOrder from "../Pages/Medicine/MedicineOrder";
import Contact from "../Pages/Contact/Contact";
import Books from "../Pages/Books/Books";
import Dashboard from "../Layout/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrder/MyOrders";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddAdmin from "../Pages/Dashboard/AddAdmin/AddAdmin";
import AddSanke from "../Pages/Dashboard/AddSnake/AddSanke";
import AddMedicine from "../Pages/Dashboard/AddMedicine/AddMedicine";
import AddBooks from "../Pages/Dashboard/AddBook/AddBooks";
import ManageSnakes from "../Pages/Dashboard/ManageSanake/ManageSnakes";
import ManageMedicines from "../Pages/Dashboard/ManageMedicine/ManageMedicines";
import ManageBooks from "../Pages/Dashboard/ManageBook/ManageBooks";
import ManageOrders from "../Pages/Dashboard/ManageOrders/ManageOrders";
import MedicineProcesses from "../Pages/MedicineProcess/MedicineProcesses";
import MedicineMoreInfo from "../Pages/MedicineProcess/MedicineMoreInfo";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "snake",
        element: <SnakeCards></SnakeCards>
      },
      {
        path: "s_ingo/:id",
        element: <PrivateRoute> <SnakeInfo></SnakeInfo> </PrivateRoute>
      },
      {
        path: "m_order/:id",
        element: <PrivateRoute> <MedicineOrder></MedicineOrder> </PrivateRoute>
      },

      {
        path: "medicine",
        element: <PrivateRoute> <Medicines></Medicines> </PrivateRoute>
      },
      {
        path:"process",
        element:<PrivateRoute> <MedicineProcesses></MedicineProcesses> </PrivateRoute> 
      },
      {
        path:"process/:id",
        element:<MedicineMoreInfo></MedicineMoreInfo>
      },
      {
        path: "book",
        element: <Books></Books>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path:"dashboard",
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }

    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [

      {
        path:"/dashboard/payment",
        element: <Payment></Payment>
      },
      {
        path: 'myorder',
        element: <MyOrders></MyOrders>
      },
      {
        path:"makeadmin",
        element: <AddAdmin></AddAdmin>
      },
      {
        path:"addsnake",
        element: <AddSanke></AddSanke>
      },
      {
        path:"addmedicine",
        element: <AddMedicine></AddMedicine>
      },
      {
        path:"addmebook",
        element: <AddBooks></AddBooks>
      },
      {
        path:"managesnake",
        element: <ManageSnakes></ManageSnakes>
      },
      {
        path:"managemedicine",
        element: <ManageMedicines></ManageMedicines>
      },
      {
        path:"managebook",
        element: <ManageBooks></ManageBooks>
      },
      {
        path:"manageorder",
        element: <ManageOrders></ManageOrders>
      },

    ]
  }
]);