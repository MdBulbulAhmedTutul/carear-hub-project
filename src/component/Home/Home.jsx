import Banner from "../Banner/Banner";
import CatagoriList from "../CatagoriList/CatagoriList";
import FeaturedJobs from "../Featured/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatagoriList></CatagoriList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;