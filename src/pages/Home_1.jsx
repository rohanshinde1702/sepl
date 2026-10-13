import AboutUs from '../components/about/AboutUs'
import Hero from '../components/hero/Hero'
import Project from '../components/projects/Project'
import Services from '../components/services/Services'
import TopBar from '../components/topBar/TopBar'
import Testimonial from '../components/testimonial/Testimonial'
import LetestNews from '../components/latestNews/LetestNews'

const Home = () => {
  return (
    <div>
      <Hero />
      <TopBar />
      <AboutUs />
      <Services />
      <Project />
      <Testimonial />
      <LetestNews />
    </div>
  )
}

export default Home