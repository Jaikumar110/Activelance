import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Lets take your business to the next level!' />
          </div>
          <div>
            <a href="https://wa.me/+923009222193"><button className='button-primary'>Request a call-back</button> </a>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
