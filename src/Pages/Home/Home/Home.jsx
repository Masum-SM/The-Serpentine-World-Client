
import Banner from "../Banner/Banner";
import EmailHome from "../EmailHOme/EmailHome";
import HomeMedicine from "../HomeMdedicine/HomeMedicine";
import SnakeBrand from "../SnakeBrand/SnakeBrand";
import SnakesHome from "../SnakeHome/SnakesHome";



const Home = () => {



    return (
        <div className="bg-black  dark:bg-white">
            <Banner></Banner>
            <SnakesHome></SnakesHome>
            <SnakeBrand></SnakeBrand>
            <HomeMedicine></HomeMedicine>
            <EmailHome></EmailHome>
        </div>
    );
};

export default Home;