import React from 'react';
import { Link } from 'react-router-dom';
import "./Book.css"

const Book = ({ book }) => {
    const { img, name, writer, bookLink } = book;
    return (
        <div className="card card-side w-96 bg-base-100 shadow-xl">
            <figure className='book_Img'><img className='' src={img} alt="Movie" /></figure>
            <div className="card-body b_c_d">
                <h2 className="book_title">{name}</h2>
                <p className='book_w'>{writer}</p>
                <div className="card-actions ">
                    <button className="btn bk_btn"><Link to={bookLink}>Book Link</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default Book;