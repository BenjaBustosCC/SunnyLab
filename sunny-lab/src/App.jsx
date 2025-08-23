import './App.css'
import SocialMediaCard from './components/SocialMediaCard/SocialMediaCard'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Body/>
      <Carousel/>
      <SocialMediaCard name="SunnyLab" 
      userName="sunnylab.cl" 
      instagram="https://www.instagram.com/sunnylab.cl" 
      youtube="https://www.youtube.com/@sunnylab.cl" 
      tiktok="https://www.tiktok.com/@sunnylab.cl" 
      spotify="https://open.spotify.com/intl-es/artist/5vhJr6XGIQ5CA7Ub5pVLjj"
      />
      <SocialMediaCard name="Rhia" 
      userName="itsrhiagirl" 
      instagram="https://www.instagram.com/itsrhiagirl" 
      youtube="https://www.youtube.com/@itsrhiamusic" 
      tiktok="https://www.tiktok.com/@itsrhiagirl" 
      spotify="https://open.spotify.com/intl-es/artist/5vhJr6XGIQ5CA7Ub5pVLjj"
      />   
    </div>

  );
}

export default App;