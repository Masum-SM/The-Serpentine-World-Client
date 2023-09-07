import React from 'react';
import { Link } from 'react-router-dom';

const BannerImages = ({ slide }) => {
    const {img, tittle } = slide;
    return (
        <div className='slide_img'>
            <div>
                <img src={img} alt=""  />
                <h1>{tittle}</h1>
                {/* <Link className='b_r_btn' to={link}>Read More</Link> */}
            </div>
        </div>
    );
};

export default BannerImages;