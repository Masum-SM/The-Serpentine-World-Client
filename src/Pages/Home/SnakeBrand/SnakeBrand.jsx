import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SnakeBrand.css";

const SnakeBrand = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (

        <div className='notice_container'>
        <div className="notice_body ">
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            <div className="notice-title animate__animated animate__lightSpeedInLeft animate__infinite	infinite animate__slower	3s" >
              
              <h2>Top Venomous Snakes</h2>
            </div>
            <div className="col-span-3 notice_slide">
              <Slider {...settings}>
                         <div>
                 <h3 className="brand-div">King Cobra</h3>
               </div>
               <div>
                 <h3 className="brand-div">Black Mamba</h3>
               </div>
               <div>
                 <h3 className="brand-div">Inland Taipan</h3>
               </div>
               <div>
                 <h3 className="brand-div">Black Mamba</h3>
               </div>
               <div>
                 <h3 className="brand-div">Coastal Taipan</h3>
               </div>
               <div>
                 <h3 className="brand-div">TAG Heuer</h3>
               </div>      </Slider>
            </div>
          </div>

        </div>
    </div>


    //     <div className="brand-container">
    //     <div className="container w-75">
    //       <div className="row">
    //         <div className="col-md-3 col-12">
    //           <h2 className="brand-title">Top venomus snakes</h2>
    //         </div>
    //         <div className="col-md-9 col-12">
    //           <Slider {...settings}>
    //             <div>
    //               <h3 className="brand-div">King Cobra</h3>
    //             </div>
    //             <div>
    //               <h3 className="brand-div">Black Mamba</h3>
    //             </div>
    //             <div>
    //               <h3 className="brand-div">Inland Taipan</h3>
    //             </div>
    //             <div>
    //               <h3 className="brand-div">Black Mamba</h3>
    //             </div>
    //             <div>
    //               <h3 className="brand-div">Coastal Taipan</h3>
    //             </div>
    //             <div>
    //               <h3 className="brand-div">TAG Heuer</h3>
    //             </div>
    //           </Slider>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    );
};

export default SnakeBrand;