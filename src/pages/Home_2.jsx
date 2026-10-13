import Hero_2 from "../components/hero/Hero_2";
import AboutUs_2 from "../components/about/AboutUs_2";
import Services_2 from "../components/services/Services_2";
import Project_2 from "../components/projects/Project_2";
import WhyUs_2 from "../components/whyUs/WhyUs_2";
import Testimonial_2 from "../components/testimonial/Testimonial_2";
import Cta_2 from "../components/cta/Cta_2";

const Home_2 = () => {
  return (
    <div>
      {/* Home 2 Hero Section with attached Stats Bar */}
      <Hero_2 />

      {/* Home 2 About Us Section */}
      <AboutUs_2 />

      {/* Home 2 Engineering Services Section */}
      <Services_2 />

      {/* Home 2 Featured Projects Section */}
      <Project_2 />

      {/* Home 2 Why SEPL Section */}
      <WhyUs_2 />

      {/* Home 2 Client Testimonial Section */}
      <Testimonial_2 />

      {/* Home 2 Bottom Call-to-Action Banner */}
      <Cta_2 />
    </div>
  );
};

export default Home_2;