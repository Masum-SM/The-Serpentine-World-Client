import React from 'react';
import "./Medicine.css";
import { Link } from 'react-router-dom';

const Medicine = ({ medicine }) => {
    const { _id, name, img, price } = medicine;
    return (
        <div className="card lg:w-80 shadow-2xl shadow-gray-400 m_card bg-slate-200">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h1 className='m_name'>Name : {name}</h1>
                <div className='m_crd_btn'>
                    <h3 className='M_price'>Price : ${price}</h3>

                    
                        <Link to={`/m_order/${_id}`}>
                        <h3><i className="fa-solid fa-cart-plus m_icon"></i></h3>
                        </Link>
                    
                </div>



            </div>
        </div>
    );
};

export default Medicine;