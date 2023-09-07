import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"
import BannerImages from "./BannerImages";
import { Link } from "react-router-dom";



const Banner = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 10000,
        cssEase: "ease-out",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
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

      const ban_imgs = [
        {
          id:1,
          "tittle":"Brazilian viper venom may become tool in fight against COVID, study shows.",
          "link":"https://www.reuters.com/business/healthcare-pharmaceuticals/brazilian-viper-venom-may-become-tool-fight-against-coronavirus-study-shows-2021-08-31/",

          "img":"https://i.ibb.co/m8LMybW/B1-1.jpg",
        //   des:"University Main Campus View.",
          
        },
        {
          id:2,
          "tittle":"If this heat isn't bad enough, new study says snakebites are another risk",
          "link":"https://phys.org/news/2023-08-isnt-bad-snakebites.html",
          img:"https://i.ibb.co/61R2cpP/B2.jpg",
        //   des:"Students' Celebrating their Graduation Moment.",
        },
        {
          id:3,
          "tittle":"Snake venom-related enzyme underlies COVID-19 mortality",
          "link":"https://frontlinegenomics.com/snake-venom-related-enzyme-underlies-covid-19-mortality/",
          img:"https://i.ibb.co/N9c9hVM/B3-1.jpg",
        //   des:"The Glorious Journey and Proud moment with President.",
        },
        {
          id:4,
          "tittle":"Researchers identify protein that counteracts key rattlesnake venom toxins",
          "link":"https://phys.org/news/2023-01-protein-counteracts-key-rattlesnake-venom.html",
          img:"https://i.ibb.co/8Bx2NJy/B8-2.jpg",
        //   des:"Award ceremony for successfull Students. ",
        },
        {
          id:5,
          "tittle":"Are stingrays actually dangerous? Three reasons you shouldn't fear these sea pancakes",
          "link":"https://phys.org/news/2023-01-stingrays-dangerous-shouldnt-sea-pancakes.html",
          img:"https://i.ibb.co/Fbw42FX/b4-1.jpg",
        //   des:"Award ceremony for successfull Students. "
        },


      ]

    return (

        <>
        <div id='banner_container_full'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-4/5 mx-auto">
                <div className="banner_left w-4/5 mx-auto my-28">
                    <h2 className="banner-titile">SNAKES SAVE LIFE</h2>
                    <p className="bannet-text">Snake venom: medical potential, pain management, cardiovascular medicine, cancer research, drug development, and scientific advancement..</p>
                    <Link className="banner-btn" to="/snake">
                  KNOW ABOUT SNAKE
                </Link>
                </div>
                <div className="banner_right w-4/5 mx-auto">
                    <Slider {...settings}>
                        {
                            ban_imgs.map(slide => <BannerImages
                                key={slide.id}
                                slide = {slide}
                            ></BannerImages>)
                        }
                        
                    </Slider>
                </div>

            </div>
        </div>
        </>
        // <Carousel className="boolean">
        //     <div>
        //         <img src={imq1} />

        //     </div>
        //     <div>
        //         <img src={imq2} />

        //     </div>
        //     <div>
        //         <img src={imq3} />
        //     </div>
        //     <div>
        //         <img src={imq4} />
        //     </div>
        // </Carousel>
    );
};

export default Banner;