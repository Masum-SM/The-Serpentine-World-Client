
import "./ManageSanke.css"

const ManageSanke = ({ snake, handleDeleteSanke }) => {
    const { _id, img, name, S_name, lf_Cylce } = snake;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-2xl s_card_bg ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Name : {name}
                    {/* <div className="badge badge-secondary s_name">{S_name}</div> */}
                </h2>
                <h3 className="badge badge-secondary s_name">Scientific Name : {S_name}</h3>
                {/* <p>{lf_Cylce?.Reproduction.slice(0, 110)}....</p> */}
                <div className="card-actions justify-center mt-4">
                    <div className="badge badge-outline remove-btn">
                        <button
                            className=" me-3"
                            onClick={() => {
                                handleDeleteSanke(_id);
                            }}
                        >
                            <i className="fas fa-trash-alt me-2 dlt_icon"></i> Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageSanke;