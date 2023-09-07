import React from 'react';

const ManageOrdr = ({order,handleOrderDeletion,handleUpdateStatus}) => {
    const { _id, status, name, img, price } = order;
    return (
        <div className="card lg:card-side lg:w-full bg-base-100 shadow-xl">
            <figure><img className="or_img" src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <h1>Price : {price}</h1>
                <p>Status : {status}</p>
                <div className="card-actions justify-center   remove-btn rounded-full text-center">
                    <button
                        className=" me-3 text-center"
                        onClick={() => {
                            handleOrderDeletion(_id);
                        }}
                    >
                        <i className="fas fa-trash-alt me-2 dlt_icon"></i> Delete
                    </button>
                    
                </div>
                <div className="card-actions justify-center   remove-btn rounded-full text-center">

                    <button
                        className=" me-3 text-center"
                        onClick={() => {
                            handleUpdateStatus(_id);
                        }}
                    >
                        <i className="fas fa-trash-alt me-2 dlt_icon"></i>Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageOrdr;