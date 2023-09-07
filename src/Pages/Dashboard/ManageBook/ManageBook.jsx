

const ManageBook = ({book,handleDeletebook}) => {
    const {_id,img,name,writer}=book
    return (
        <div className="card  shadow-2xl shadow-gray-400 m_card">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h1 className='m_name'>Name : {name}</h1>
                <div className='m_crd_btn'>
                    <h3 className='M_price'>Writer : {writer}</h3>




                    
                </div>
                <div className="badge badge-outline remove-btn mx-auto mt-4">
                    <button
                            className=" me-3"
                            onClick={() => {
                                handleDeletebook(_id);
                            }}
                        >
                            <i className="fas fa-trash-alt me-2 dlt_icon"></i> Delete
                        </button>
                    </div>

            </div>
        </div>
    );
};

export default ManageBook;