import React from 'react'
import "./formerdean.css"
import FormerDeanCard from './FormerDeanCard'

const FormerDeans = () => {
  return (
    <div className="con">
          <h3 className="light-heading">Former<br/><span className="dark-subheading">Deans</span></h3>
          <div className="former-dean-card-con con">
            <FormerDeanCard/>
            <FormerDeanCard/>
            <FormerDeanCard/>
          </div>
        </div>
  )
}

export default FormerDeans
