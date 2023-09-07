import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

    const [book, setBook] = useState([]);
    // const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetch('https://serpentine-world-server.vercel.app/books')
            .then(res => res.json())
            .then(data => {
                setBook(data);
                // setLoading(false);
            })

    }, [])

    return (
        <div className="book_container py-12">
            <div className="snake_container max-w-[1500px] mx-auto ">
            <h1 className="section_header bks_clr">books</h1>
                <h1 className="section_header2">BOOKS ABOUT SNAKE</h1>
                <h3 className="max-w-[800px] mx-auto header_info my-8 px-2">The Serpents Origins Begin your journey with an exploration of the evolutionary history of snakes. Learn about their ancient origins and how they have adapted over millions of years to become one of the most diverse and successful groups of reptiles on Earth</h3>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-2 lg:px-72 cards">
                    {
                        book.map((book) => (
                            <Book
                                key={book._id}
                                book={book}

                            ></Book>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Books;