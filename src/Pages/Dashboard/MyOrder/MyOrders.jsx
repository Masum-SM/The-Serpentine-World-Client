import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../assets/provider/AuthProvider";
import MyOrder from "./MyOrder";


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState([]);
    const { user } = useContext(AuthContext);
  
    const email = user?.email;


    useEffect(() => {
        fetch(`https://serpentine-world-server.vercel.app/orders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);



  

    const handleOrderDeletion = (id) => {
        const url = `https://serpentine-world-server.vercel.app/orders/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount>0) {
                    alert("Do you want to delete?");
                    const remaining = orders.filter((order) => order?._id !== id);
                    setOrders(remaining);
                }
            });
    };
    useEffect(() => {
        const foundMyOrders = orders.filter((order) => order?.email == email);
        setOrder(foundMyOrders);
    }, [orders]);

    return (
        <div>
            <h2 className="banner-title mt-5">
              
            </h2>

            <h5 className="banner-qutes">
           
            </h5>
            <div className="grid grid-cols-1 my-5 gap-4">
                {order.map((myOrder) => (
                    <MyOrder
                        key={myOrder._id}
                        myOrder={myOrder}
                        handleOrderDeletion={handleOrderDeletion}
                    ></MyOrder>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;