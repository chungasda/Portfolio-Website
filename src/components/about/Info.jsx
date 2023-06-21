import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">17 Months</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

            <h3 className="about__title">Diploma in IT</h3>
            <span className="about__subtitle">National Academy of IT</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>

            <h3 className="about__title">100 WPM</h3>
            <span className="about__subtitle">Type speed</span>
        </div>
    </div>
  )
}

export default Info