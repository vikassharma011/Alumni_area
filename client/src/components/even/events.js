
import React from 'react';
import "./event.css"
import Topbar from '../Welcome/Topbar';

const EventCar = () => {
  return (
    <div>
      <Topbar/>
      <header>
        <div className="open">
          <span className="cls"></span>
         
          <span className="cls"></span>
        </div>
        <nav>
          <div className="social">
            <ul>
              <li>
                <a><i className="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a><i className="fab fa-twitter"></i></a>
              </li>
              <li><a>English</a></li>
              <li><a>My page</a></li>
             
            </ul>
          </div>
          <div className="navigation">
            <a href=""><img src="images/headphone.png" className="navImage" alt="" /></a>
            <ul>
              <li><a href="./about.html">About</a></li>
              <li><a href="#">Program</a></li>
              <li><a href="#">Join</a></li>
              <li><a href="#">Sponsor</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Program</a></li>
              <li><button type="button">CT Campaign</button></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="banner">
          <h1>the countdown summit program</h1>
          <div className="banner-summary">
            <p>
              First-ever in-person TED climate conference — four days of inspiring
              talks, collaboration, connections, and commitments to meaningful
              action for a better world.
            </p>
          </div>
          <h2>2021.10.12(tue) ~ 15(fri)</h2>
          <p className="location">@ Edinburgh, Scotland</p>
        </section>

        <section className="programs">
          <h3>Main Program</h3>
          <hr className="line" />

          <div className="program-lineout">
            <div id="program-0" className="p-cards">
              <img src="images/icon4.png" alt="" />
              <p className="title">Lecture</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="program-1" className="p-cards">
              <img src="images/icon1.png" alt="" />
              <p className="title">Exhibition</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="program-2" className="p-cards">
              <img src="images/icon2.png" alt="" />
              <p className="title">Imagining</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="program-3" className="p-cards">
              <img src="images/icon3.png" alt="" />
              <p className="title">Transforming</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="program-4" className="p-cards">
              <img src="images/icon.png" alt="" />
              <p className="title">Reducing</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <h3 className="go"><a href="">SEE THE WHOLE PROGRAM</a></h3>
          <button type="button">join CT summit program 2021</button>
        </section>

        <section className="speakers">
          <h3>featured speakers</h3>
          <hr className="line" />
          <div className="speakers-lineout"></div>
          <button id="button" type="button">More</button>
        </section>

        <section className="partner">
          <h3>Partner</h3>
          <hr className="line" />

          <ul className="partner-list">
            <li className="image"><img src="images/mozilla.png" alt="" /></li>
            <li><img src="images/google.png" alt="" /></li>
            <li><img src="images/air.png" alt="" /></li>
            <li className="image">
              <img src="images/ted.png" className="stretch" alt="" />
            </li>
            <li className="image">
              <img src="images/tesla.png" className="stretch" alt="" />
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <div className="footer color-w">
          <img src="images/headphone.png" alt="" />
          <p>2021 CT Summit, all rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default EventCar;
