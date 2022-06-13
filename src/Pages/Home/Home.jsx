import Hero from "../../Components/Hero/Hero";
import Favorites from "../../Components/Favorites/Favorites";
import Recommendations from "../../Components/Recommendations/Recommendations";
import Workshops from "../../Components/Workshops/Workshops";
import Review from "../../Components/Review/Review";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Favorites />
      <Recommendations />
      <Workshops />
      <Review />
    </main>
  );
};

export default Home;
