import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ServicesSection from '../components/Services';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data';

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSideBar} />
      <Navbar toggle={toggleSideBar} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
