import './App.css'
import SocialMediaCard from './components/SocialMediaCard/SocialMediaCard'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Carousel from './components/Carousel/Carousel'
import Services from './components/Services/Services'
import TechnicalSpecs from './components/TechnicalSpecs/TechnicalSpecs'
import ContactForm from './components/ContactForm/ContactForm'
import { Element } from "react-scroll";
import { useState } from 'react';
import AdminPanel from './components/AdminPanel/AdminPanel'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <div className='App'>
        <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/admin"
            element={isAdmin ? <AdminPanel /> : <Navigate to="/" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
