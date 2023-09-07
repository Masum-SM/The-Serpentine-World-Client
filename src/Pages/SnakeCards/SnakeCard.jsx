import { Link } from "react-router-dom";
import "./Snake.css";

const SnakeCard = ({ snake }) => {
    const { _id, img, name, S_name, lf_Cylce } = snake;




    return (

        <div className="card lg:w-96 md:80 bg-base-100 shadow-2xl s_card_bg ">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Name : {name}
                    {/* <div className="badge badge-secondary s_name">{S_name}</div> */}
                </h2>
                <h3 className="badge badge-secondary s_name">Scientific Name : {S_name}</h3>
                <p>{lf_Cylce?.Reproduction?.slice(0, 110)}....</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                        <Link to={`/s_ingo/${_id}`}>
                            Read More
                        </Link>
                    </div>

                </div>
            </div>
        </div>



        // <div className="card card-side bg-base-100 drop-shadow-xl single_card grid grid-cols-1 lg:grid-cols-2 text-justify">
        //     <figure  className="t_img_container"><div>
        //         <img src={img} alt="Movie" />
        //         </div></figure>
        //     <div className="card-body crd_bdy_teacher">
        //         <h1 className="card-title font-bold">Name: {name}</h1>
        //         <h3 className="text-indigo-700">Scientific Name: {S_name}</h3>
        //         <p ><span className="font-bold"> Life Cyle: </span>{lf_Cylce.Reproduction.slice(0,70)}......</p>
        //         <p></p>
        //         <div className="card-actions ">
        //         <Link to={`/s_ingo/${_id}`}>
        //         <button className="btn btn-green-500">Read More</button>
        //         </Link>

        //         </div>
        //     </div>
        // </div>
    );
};

export default SnakeCard;