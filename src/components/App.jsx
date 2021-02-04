import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Coop from './Coop/Coop';
import Projects from './Projects/Projects';
import Career from './Career/Career';
import Sum from './Sum/Sum';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, coopData, projectsData, careerData, sumData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [coop, setCoop] = useState({})
  const [projects, setProjects] = useState([]);
  const [career, setCareer] = useState([]);
  const [sum, setSum] = useState({})
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
	setCoop({ ...coopData });
    setProjects([...projectsData]);
	setCareer({ ...careerData });
	setSum({ ...sumData });
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, coop, projects, career, sum, contact, footer }}>
      <Hero />
      <About />
	  <Coop />
      <Projects />
	  <Career />
	  <Sum />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
