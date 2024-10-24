import BrandNewProducts from "../components/home/BrandNewProducts";
import MakeUpStories from "../components/home/MakeUpStories";
import NewArrivalCard from "../components/home/NewArrivalCard";
import Slider from "../components/home/Slider";


const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <NewArrivalCard></NewArrivalCard>
            <MakeUpStories></MakeUpStories>
            <BrandNewProducts></BrandNewProducts>
        </div>
    );
};

export default Home;