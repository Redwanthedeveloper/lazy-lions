import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import Ratity from '../components/Ratity';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Banner />
      <ImageSlider />
      <Ratity />
      <Roadmap />
      <Team />
      <Footer />
    </>
  );
};

export default HomeScreen;
