import { useEffect, useState } from "react";
import ManageMedicine from "./ManageMedicine";


const ManageMedicines = () => {
    const [medicine, setMedicine] = useState([]);
    // const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('https://serpentine-world-server.vercel.app/medicine')
            .then(res => res.json())
            .then(data => {
                setMedicine(data);
                // setLoading(false);
            })

    }, [])



    const handleDeleteMedicine = (id) => {
        const url = `https://serpentine-world-server.vercel.app/medicine/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert("Do you want to delete?");
              const remaining = medicine.filter(
                (medicine) => medicine?._id !== id
              );
              setMedicine(remaining);
            }
          });
      };


    return (
        <div className="medicine_container py-12 ">
            <div className="snake_container max-w-[1500px] mx-auto  ">
            <h1 className="section_header">Medicines</h1>
                <h1 className="section_header2">SNAKES SAVE LIFE</h1>
                <h3 className="max-w-[800px] mx-auto header_info my-8 px-2"></h3>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-32 cards">
                    {
                        medicine.map((medicine) => (
                            <ManageMedicine
                                key={medicine._id}
                                medicine={medicine}
                                handleDeleteMedicine ={
                                    handleDeleteMedicine
                                }

                            ></ManageMedicine>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>
    );
    
};

export default ManageMedicines;