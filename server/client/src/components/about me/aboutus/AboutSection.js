import { useEffect, useRef } from 'react'
import './AboutSection.css'

const AboutSection = () => {
  const aboutImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(aboutImageRef.current)
  }, [])

  return (
    <section className='aboutSection'>
      <div className="aboutLeft">
        <img 
          src='https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.charlotteparent.com/content/uploads/data-import/a86308ab/shutterstock_658847998.jpg' 
          alt=''
          className='aboutImage'
          ref={aboutImageRef} 
          width={750} height={450}/>
      </div>
      <div className="aboutRight">
        <div className="about-header">
          About Us
        </div>
        <div className="about-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/><br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="about-button">
          <button>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection