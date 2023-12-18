import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { BlogCard } from "@/components/router"
import React from "react"
import Type from "@/components/type"
const Hero = () => {

  return (
    <>

<section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Welcome To Activelance Agency</p>
            <h1 className="hero--section--title">
              <Type />
            </h1>
            <p className="hero--section-description">
              A Full-service Agency Is A Comprehensive Business That Offers A Wide Range Of Professional Services To Meet The Diverse Needs Of Its Clients.
               These Agencies Are Often Found In Industries Such As Advertising, Marketing,
                Communications, And Digital Media. The Key Characteristic Of A Full-service Agency Is Its Ability To Provide End-to-end Solutions,
                 Handling Various Aspects Of A Project Or Campaign Under One Roof.
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
        <img src="../images/t1.jpg" alt="Hero Section" />
      </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <BlogCard />
    </>
  )
}

export default Hero;
