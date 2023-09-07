import { useEffect, useState } from "react";
import ManageSanke from "./ManageSanke";


const ManageSnakes = () => {
    const [snake, setSnake] = useState([]);
    // const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('https://serpentine-world-server.vercel.app/snakes')
            .then(res => res.json())
            .then(data => {
                setSnake(data);
                // setLoading(false);
            })

    }, [])


    const handleDeleteSanke = (id) => {
        const url = `https://serpentine-world-server.vercel.app/snakes/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              alert("Do you want to delete?");
              const remaining = snake.filter(
                (snake) => snake?._id !== id
              );
              setSnake(remaining);
            }
          });
      };

    return (
        <div className="mt-12">
            <div className="snake_container max-w-[1500px] mx-auto mb-16 ">
                <h1 className="section_header">Snakes</h1>
                <h1 className="section_header2">VENOMOUS SNAKES</h1>
                <h3 className="max-w-[800px] mx-auto header_info my-8 px-2"></h3>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-32 cards">
                    {
                        snake.map((snake) => (
                            <ManageSanke
                                key={snake._id}
                                snake={snake}
                                handleDeleteSanke={handleDeleteSanke}

                            ></ManageSanke>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default ManageSnakes;