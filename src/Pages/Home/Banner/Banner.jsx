import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imq1 from '../../../assets/Home/BImages/B1.jpg';
import imq2 from '../../../assets/Home/BImages/B2.jpg';
import imq3 from '../../../assets/Home/BImages/B3.jpg';
import imq4 from '../../../assets/Home/BImages/b4.jpg';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={imq1} />
                
            </div>
            <div>
                <img src={imq2} />
                
            </div>
            <div>
                <img src={imq3} />
            </div>
            <div>
                <img src={imq4} />
            </div>
        </Carousel>
    );
};

export default Banner;