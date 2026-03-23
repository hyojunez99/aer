import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import CollectionPreview from "../components/home/CollectionPreview";
import Featured from "../components/home/Featured";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <CollectionPreview />
      <Featured />
    </>
  );
};

export default Home;