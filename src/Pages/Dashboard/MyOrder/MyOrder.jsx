import "./MyOrder.css"

const MyOrder = ({ myOrder, handleOrderDeletion }) => {
    const { _id, status, name, img, price } = myOrder;




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
            </div>
        </div>




        // <div className="card lg:w-96 bg-base-100 shadow-2xl s_card_bg ">
        //     <figure><img src={img} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">
        //             Name : {name}
        //             {/* <div className="badge badge-secondary s_name">{S_name}</div> */}
        //         </h2>
        //         <h3 className="badge badge-secondary s_name">Scientific Name : {price}</h3>
        //         {/* <p>{lf_Cylce?.Reproduction.slice(0, 110)}....</p> */}
        //         <div className="card-actions justify-center mt-4">
        //             <div className="badge badge-outline remove-btn">
        //                 <button
        //                     className=" me-3"
        //                     onClick={() => {
        //                         handleOrderDeletion(_id);
        //                     }}
        //                 >
        //                     <i className="fas fa-trash-alt me-2 dlt_icon"></i> Delete
        //                 </button>
        //             </div>

        //         </div>
        //     </div>
        // </div>
    );
};

export default MyOrder;