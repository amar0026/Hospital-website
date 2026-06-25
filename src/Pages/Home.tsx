import CareUnitSection from "../Components/Careunitsection";
import CatchLinesSection from "../Components/Catchlinessection";
import FindDoctorSection from "../Components/Finddoctorsection";
import Footer from "../Components/Footer";
import HeroSlider from "../Components/HeroSlider";
import PrenatalCareSection from "../Components/Prenatalcaresection";
import ServicesSection from "../Components/Service";
import TestimonialsSection from "../Components/Testimonialsection";
import TogetherSection from "../Components/togethersection";
import WhyChooseSection from "../Components/Whychoosesection";
import YoutubeSection from "../Components/Youtubesection";

const Home = () => {
  return (
    <>
     <HeroSlider/>
     <CareUnitSection/>
     <ServicesSection/>
     <FindDoctorSection/>
     <PrenatalCareSection/>
     <WhyChooseSection/>
     <TogetherSection/>
     <YoutubeSection/>
     <TestimonialsSection/>
     <CatchLinesSection/>
     <Footer/>
    </>
  );
};

export default Home;