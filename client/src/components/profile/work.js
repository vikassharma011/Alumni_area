import React from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css"

function Work() {
    return (
      <div>
        <div className="work_header">
          <p className="head_title">My Previous Works</p>
        </div>
  
        <main className="flex">
          <div className="card work">
            <h2>Registration Form</h2>
            <img src="images/registration-form.png" className="img_pro" alt="PROJECT1" />
            <p className="details">In this project, I built a mobile-first, responsive registration form using a variety of HTML form input types and attributes.</p>
            <Link to="/work/registration-form"><button type="button" className="live">Live</button></Link>
            <Link to="/work/registration-form"><button type="button">Github</button></Link>
          </div>
          <div className="card work">
            <h2>Full-Stack-Conference</h2>
            <img src="images/full.png" className="img_pro" alt="Project2" />
            <p className="details">Full-Stack-Conference is a website that I built using the Bootstrap 4 framework.</p>
            <Link to="/work/full-stack-conference"><button type="button" className="live">Live</button></Link>
            <Link to="/work/full-stack-conference"><button type="button">Github</button></Link>
          </div>
          <div className="card work">
            <h2>The Delight</h2>
            <img src="images/delight.png" className="img_pro" alt="Project3" />
            <p className="details">The Delight is a webpage for a restaurant that I built using the Bootstrap 4 framework and JavaScript.</p>
            <Link to="/work/the-delight"><button type="button" className="live">Live</button></Link>
            <Link to="/work/the-delight"><button type="button">Github</button></Link>
          </div>
          <div className="card work">
            <h2>SVG Animations</h2>
            <img src="images/svg.png" className="img_pro" alt="Project4" />
            <p className="details">SVG Animations use SVGs to spruce up and add a bit of character to a website.</p>
            <Link to="/work/svg-animations"><button type="button" className="live">Live</button></Link>
            <Link to="/work/svg-animations"><button type="button">Github</button></Link>
          </div>
        </main>
      </div>
    );
  }
  
  export default Work;