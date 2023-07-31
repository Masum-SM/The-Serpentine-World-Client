
const SnakeCard = ({snake}) => {
    const {img,name,sName,lfCyle} = snake;




    return (
        <div className="card card-side bg-base-100 drop-shadow-xl single_card grid grid-cols-1 lg:grid-cols-2">
            <figure  className="t_img_container"><div>
                <img src={img} alt="Movie" />
                </div></figure>
            <div className="card-body crd_bdy_teacher">
                <h2 className="card-title">{name}</h2>
                <h4>{sName}</h4>
                <p>{lfCyle.Reproduction}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">VIEW PROFILE</button>
                </div>
            </div>
        </div>
    );
};

export default SnakeCard;