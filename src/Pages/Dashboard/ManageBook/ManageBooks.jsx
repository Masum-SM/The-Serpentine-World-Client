import { useState } from "react";
import { useEffect } from "react";
import ManageBook from "./ManageBook";

const ManageBooks = () => {
    const [book, setbook] = useState([]);
    // const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('https://serpentine-world-server.vercel.app/books')
            .then(res => res.json())
            .then(data => {
                setbook(data);
                // setLoading(false);
            })

    }, [])



    const handleDeletebook = (id) => {
        const url = `https://serpentine-world-server.vercel.app/books/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert("Do you want to delete?");
                    const remaining = book.filter(
                        (book) => book?._id !== id
                    );
                    setbook(remaining);
                }
            });
    };
    return (
        <div className="py-12 ">

            <div className="snake_container max-w-[1500px] mx-auto mb-16 ">
                <h1 className="section_header">bookes</h1>
                <h1 className="section_header2">BOOKS ABOUT VENOMOUS SNAKES</h1>
                <h3 className="max-w-[800px] mx-auto header_info my-8 px-2"></h3>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-2 lg:px-32 cards">
                        {
                            book.map((book) => (
                                <ManageBook
                                    key={book._id}
                                    book={book}
                                    handleDeletebook={
                                        handleDeletebook
                                    }

                                ></ManageBook>
                            ))
                        }
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ManageBooks;