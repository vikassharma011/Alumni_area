import { useEffect, useRef } from "react"
import './DownloadSection.css'
import ShopIcon from '@mui/icons-material/Shop';

const DownloadSection = () => {
  const downloadImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(downloadImageRef.current)
  }, [])
  
  return (
    <section className="downloadSection">
      <div className="imageSection">
        <img 
          src='https://www.univariety.com/blog/wp-content/uploads/2022/02/5853-min-scaled.jpg' 
          alt=""
          className='downloadImage'
          ref={downloadImageRef} 
          width={576} height={360}/>
      </div>
      <div className="downloadText">
        <div className="downloadTitle">
          Our Services Are Available Anytime, Anywhere.
        </div>
        <div className="downloadSubtitle">
          Download the app today!
        </div>
        <div className="downloadButtons">
          <button>
           <ShopIcon/>
          </button>
          <button>
            <img src="/images/downloadAppApple.png" height={43} width={148}/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection