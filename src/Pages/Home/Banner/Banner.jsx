import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import imq1 from '../../../assets/Home/BImages/B1.jpg';
import imq2 from '../../../assets/Home/BImages/B2.jpg';
import imq3 from '../../../assets/Home/BImages/B3.jpg';
import imq4 from '../../../assets/Home/BImages/b4.jpg';
import imq7 from '../../../assets/Home/BImages/b7.jpg';
import imq8 from '../../../assets/Home/BImages/b8.jpg';

const Banner = () => {
    return (

        <>
            <Swiper
                spaceBetween={40}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={imq1} alt="" /> </SwiperSlide>
                <SwiperSlide><img src={imq2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imq3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imq4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imq7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imq8} alt="" /></SwiperSlide>
      
            </Swiper>
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