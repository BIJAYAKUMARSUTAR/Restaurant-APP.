import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only king we are serious about is food</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quo non inventore quisquam magnam quasi consequatur saepe veritatis expedita ex dicta perspiciatis reprehenderit doloremque quae, nobis deleniti porro laboriosam corrupti? Ipsa enim quam inventore impedit.</p>
            <Link to="/about">
              Explore Menu <span><HiOutlineArrowNarrowRight /></span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
