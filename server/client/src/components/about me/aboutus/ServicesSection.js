import { useEffect, useRef } from "react"
import './ServiceSection.css'


const ServicesSection = () => {
  const serviceImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(serviceImageRef.current)
  }, [])

  return (    
    <section className="serviceSection">
      <div className="serviceText">
        <div className="motto">
          Services
        </div>
        <div className="mottoSubtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/><br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="serviceButtons">
          <button>Learn More</button>
        </div>
      </div>
      <div className="image-Section">
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIHxkZGsr3iW-41p6g3KYuavUmSynaUV9tyColsdCSFFoOd7G8BIF_fCzS6GcSL-kNIY&usqp=CAU' 
          className='serviceImage'
          ref={serviceImageRef} 
          alt=""
          width={515} height={515}/>
      </div>
    </section>
  )
}

export default ServicesSection