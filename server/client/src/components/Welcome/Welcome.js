import React from 'react';
import './welcome.css'; // Import your CSS file
import { Link } from 'react-router-dom';
import NewsBanner from './newsbanner';
import Footer from '../footer/footer';
import Header from '../header/Header';

function Welcome({isAuthenticated}) {
  return (
    <div>
      <section className="header">
        <Header isAuthenticated={isAuthenticated}/>
        <div className="textbox">
          <h1>ALUMNI AREA</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            molestias nemo officia quos, autem totam laudantium amet iure quae
            reprehenderit hic vero quisquam non sunt dolor obcaecati illo!
            Ducimus, qui.
          </p>
          <a href="hero-btn" className="hero-btn">visit us to know more</a>
        </div>
      </section>

      <section className="course">
        <h1>courses we offer</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
          beatae. Quod voluptate, autem optio explicabo quasi tempora aperiam,
          labore odio earum fugiat voluptas fugit dolore? Dignissimos dolor odio
          provident corrupti!
        </p>
        <div className="row">
          <div className="course-col">
            <h3>Intermediate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              consequuntur temporibus cum aspernatur similique, odio unde labore
              quaerat qui dolor corrupti amet blanditiis omnis fugit facilis ipsa
              suscipit earum sapiente.
            </p>
          </div>
          <div className="course-col">
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              consequuntur temporibus cum aspernatur similique, odio unde labore
              quaerat qui dolor corrupti amet blanditiis omnis fugit facilis ipsa
              suscipit earum sapiente.
            </p>
          </div>
          <div className="course-col">
            <h3>Post Graduation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              consequuntur temporibus cum aspernatur similique, odio unde labore
              quaerat qui dolor corrupti amet blanditiis omnis fugit facilis ipsa
              suscipit earum sapiente.
            </p>
          </div>
        </div>
      </section>
      <NewsBanner/> 
      <Footer/>
    </div>
  );
}

export default Welcome;
