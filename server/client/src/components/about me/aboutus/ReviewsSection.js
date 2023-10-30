import { useRef, useState } from "react"
import './ReviewsSection.css'

const ReviewsSection = () => {
  return (
    <section className="reviewsSection">
      <div className="reviewTextSection">
        <div className="reviewSectionTitle">
          Reviews
        </div>
        <div className="reviewSectionSubtitle">
          Have a look at what some of our customers are saying about us!
        </div>
      </div>
      <div className="allReviews">
        <div className="review">
          <div className="profilePic">
            <img src="/images/profPic1.png" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              David Wilson
            </div>
            <div className="reviewerLocation">
              San Francisco, CA
            </div>
            <div className="reviewerReview">
              <em>"I have been a customer of this company for years and have always been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="/images/profPic2.png" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Sarah Lee
            </div>
            <div className="reviewerLocation">
              Seattle, WA
            </div>
            <div className="reviewerReview">
              <em>"I have been a customer of this company for years and have always been extremely satisfied with their products and services. The staff is friendly and helpful, and they always go above and beyond to make sure I have everything I need. Highly recommend!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="/images/profPic3.png" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Frank Jones
            </div>
            <div className="reviewerLocation">
              Houston, TX
            </div>
            <div className="reviewerReview">
              <em>"I have had nothing but positive experiences with this company. They have always been prompt and efficient, and the products I have purchased from them have exceeded my expectations. I will definitely be a repeat customer!"</em>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="profilePic">
            <img src="/images/profPic4.png" />
          </div>
          <div className="reviewText">
            <div className="reviewerName">
              Samantha Smith
            </div>
            <div className="reviewerLocation">
              Austin, TX
            </div>
            <div className="reviewerReview">
              <em>"I was blown away by the level of service I received from this company. They were extremely knowledgeable and helped me find exactly what I was looking for. I will definitely be using them again in the future."</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection