import React from 'react'
import "./doradetails.css"

const DoraDetails = () => {
  return (
    <div className="co">
    <h3 className="light-heading">Dean of <br/><span className="dark-subheading">Resources & Alumni Affairs</span></h3>
    <div className="dora-name">Tilak Raj Kapoor Sir</div>
    <div className="dora-details">
      <div className="dora-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSos8WJJwI6qi-oyEqumgt5myV32u4aP3FvUA&usqp=CAU" alt=''/></div>
      <div className="dora-co">
        <div className="dora-about">The Dean of Resources and Alumni Affairs (DORA) looks over the functioning of the Institute Alumni Relations Cell (IARC), and acts as a channel between the IARC and the administration. The guidance and support of DORA has always been a source of motivation for both the alumni and the IARC to work together to strengthen the cooperation between the alumni and the institute, and it is under the aegis of DORA that the IARC has undertaken several initiatives for the same.</div>
        <div className="dora-contact">
          <div className="phone contact-row">
            <img src="/static/images/phone-icon.svg" alt=''/>
            <div className="dora-contact-phone">
              +91-XXX-XXXX-XXX
            </div>
          </div>
          <div className="email contact-row">
            <img src="/static/images/email-icon.svg" alt='' />
            <div className="dora-contact-email">
              dora@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DoraDetails
