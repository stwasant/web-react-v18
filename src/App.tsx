import React from 'react';

// Custom components
import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// Assets
import './App.css';
// Bootstrap Dependecy
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    
   </div>
  );
}

export default App;
