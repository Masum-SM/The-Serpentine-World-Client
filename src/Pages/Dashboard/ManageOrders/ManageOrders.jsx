import  { useEffect, useState } from 'react';
import ManageOrdr from './ManageOrdr';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders)

    useEffect(() => {
      fetch("https://serpentine-world-server.vercel.app/orders")
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [orders]);
  
    const handleOrderDeletion = (id) => {
      const url = `https://serpentine-world-server.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Do you want to delete?");
            const remaining = orders?.filter((order) => order?._id !== id);
            setOrders(remaining);
          }
        });
    };
  
    const handleUpdateStatus = (id) => {
      const updateSataus = { status: "Approved" };
  
      fetch(`https://serpentine-world-server.vercel.app/orders/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateSataus),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Status updated.");
            // window.location.reload();
          }
        });
    };
    return (
        <div className="py-12 ">

            <div className="snake_container max-w-[1500px] mx-auto mb-16 ">
                <h1 className="section_header">orderes</h1>
                <h1 className="section_header2">orderS ABOUT VENOMOUS SNAKES</h1>
                <h3 className="max-w-[800px] mx-auto header_info my-8 px-2"></h3>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-2 lg:px-32 cards">
                        {
                            orders.map((order) => (
                                <ManageOrdr
                                    key={order._id}
                                    order={order}
                                    handleOrderDeletion={
                                        handleOrderDeletion
                                    }
                                    handleUpdateStatus={handleUpdateStatus}

                                ></ManageOrdr>
                            ))
                        }
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ManageOrders;