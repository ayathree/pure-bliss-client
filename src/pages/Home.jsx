import BrandNewProducts from "../components/home/BrandNewProducts";
import MakeUpStories from "../components/home/MakeUpStories";
import NewArrivalCard from "../components/home/NewArrivalCard";
import ParrisWeek from "../components/home/ParrisWeek";
import ProductForLips from "../components/home/ProductForLips";
import Slider from "../components/home/Slider";
import {Helmet} from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Pure Bliss | Home</title>
            </Helmet>
            
            <Slider></Slider>
            <NewArrivalCard></NewArrivalCard>
            <ProductForLips></ProductForLips>
            <MakeUpStories></MakeUpStories>
            <BrandNewProducts></BrandNewProducts>
            <ParrisWeek></ParrisWeek>
        </div>
    );
};

export default Home;