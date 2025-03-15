import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkingStyle from './components/WorkingStyle';
import Extracurricular from './components/Extracurricular';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <LanguageProvider>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <WorkingStyle />
        <Extracurricular />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;