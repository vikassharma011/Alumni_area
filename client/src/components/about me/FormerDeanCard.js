import React from 'react'
import "./FormerDeanCard.css"

const FormerDeanCard = () => {
  return (
    <div className="former-dean-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSos8WJJwI6qi-oyEqumgt5myV32u4aP3FvUA&usqp=CAU" className="former-dean-card-image" alt=''/>
    <div className="former-dean-card-co">
      <div className="dean-info">
        <div className="years-of-service">2018-20XX</div>
        <div className="dean-info-ro">Name</div>
        <div className="dean-info-ro">Department</div>
        <div className="dean-info-ro">Contact No.</div>
        <div className="dean-info-ro">Email</div>
      </div>
    </div>
  </div>
  )
}

export default FormerDeanCard
