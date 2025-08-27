import './App.css'
import SocialMediaCard from './components/SocialMediaCard/SocialMediaCard'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Carousel from './components/Carousel/Carousel'
import Services from './components/Services/Services'
import TechnicalSpecs from './components/TechnicalSpecs/TechnicalSpecs'

function App() {
  return (
    <div className='App'>
      <Header/>
        <Hero/>
        <Carousel/>
        <Services/>
        <TechnicalSpecs/>
        <SocialMediaCard name="SunnyLab" 
        userName="sunnylab.cl" 
        instagram="https://www.instagram.com/sunnylab.cl" 
        youtube="https://www.youtube.com/@sunnylab.cl" 
        tiktok="https://www.tiktok.com/@sunnylab.cl" 
        spotify="https://open.spotify.com/intl-es/artist/5vhJr6XGIQ5CA7Ub5pVLjj"
        />
        
    </div>

  );
}

export default App;