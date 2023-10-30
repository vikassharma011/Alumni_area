import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Topbar from '../Welcome/Topbar.js';
import AboutSection from './aboutus/AboutSection';
import ChooseUsSection from './aboutus/ChooseUsSection';
import DownloadSection from './aboutus/DownloadSection';
import NavigationBar from './aboutus/NavigationBar';
import ReviewsSection from './aboutus/ReviewsSection';
import ServicesSection from './aboutus/ServicesSection';
import WelcomeSection from './aboutus/Welcomesection';

import Footer from '../footer/footer.js';
//import "./Vision.css"
import Header from '../header/Header.js';

function Vision({ isAuthenticated }) {
 
  

 
  return (
    <div>
     
     
      <Header isAuthenticated={isAuthenticated}/>
    <WelcomeSection/>
   <AboutSection/>
   <ServicesSection/>
   <ChooseUsSection/>
   <ReviewsSection/>
   <DownloadSection/>

      <Footer />
    </div>
  );
}

export default Vision;
