import React, { useState } from 'react';
import Topbar from '../Welcome/Topbar.js';
import VisionTab from './Visiontab.js';
import Dora from './Dora.js';
import Team from './Team.js';
import SocialLinks from './SocialLinks.js';
import Tab from './Tab.js';
import Footer from '../footer/footer.js';
//import LandingFooter from '../Components/landingFooter.jsx';
import "./Vision.css"

function Vision({isAuthenticated}) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { lightHeading: '', darkHeading: 'Vision' },
    { lightHeading: '', darkHeading: 'DORA' },
    { lightHeading: '', darkHeading: 'Team' },
    { lightHeading: '', darkHeading: 'Social Links' },
  ];

  const tabContent = [
    <div id="vision" className="about-con">
       <VisionTab/>
     </div>,
    <div id="dora" className="about-con">
      <Dora />
    </div>,
    <div id="team" className="about-con">
      <Team />
    </div>,
    <div id="social" className="about-con">
      <SocialLinks />
    </div>,
  ];

  const tabClick = (clickTab) => {
    setActiveTab(clickTab);
  };

  return (
    <div>
      <Topbar isAuthenticated={isAuthenticated}/>
       <div className="about-con">
        <div className="ro">
          <div className="con">
            <Tab tabs={tabs} onClick={tabClick} activeTab={activeTab} />
          </div>
          {tabContent[activeTab]}
        </div>
  </div>
      <Footer/>
    </div>
  );
}

export default Vision;
