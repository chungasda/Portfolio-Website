import React, { useState } from 'react'
import "./qualifications.css"

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualifications section">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My journey</span>

        <div className="qualifications__container container">
            <div className="qualifications__tabs">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualifications__button qualifications__active button--flex"
                        : "qualifications__button button__flex"
                     }
                    >
                    <i className="uil uil-graduation-cap 
                    qualifications__icon"></i> Education
                </div>

                <div className={
                        toggleState === 2 
                        ? "qualifications__button qualifications__active button--flex"
                        : "qualifications__button button__flex"
                     }>
                    <i className="uil uil-briefcase-alt qualifications__icon"></i> Experience
                </div>
            </div>

            <div className="qualifications__sections">
                <div 
                  className={
                    toggleState === 1 
                    ? "qualifications__content qualifications__content-active" 
                    : "qualifications__content"}>
                    <div className="qualifications__data">
                        <div>
                            <h3 className="qualifications__title">ICT50115 Diploma in Information Technology</h3>
                            <span className="qualifications__subtitle">National Academy of Information Technology</span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i> Completed 2017
                            </div>
                        </div>
                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div></div>

                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                        <div>
                            <h3 className="qualifications__title">Service Desk Officer</h3>
                            <span className="qualifications__subtitle">NEC Australia</span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i> August 2019 - May 2020
                            </div>
                        </div>
                    </div>  

                    <div className="qualifications__data">
                        <div>
                            <h3 className="qualifications__title">Front End Web Developer & IT Support Officer</h3>
                            <span className="qualifications__subtitle">Australian Institute of Mining & Metallurgy</span>
                            <div className="qualifications__calendar">
                                <i className="uil uil-calendar-alt"></i> April 2021 - October 2022
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualifications__rounder"></span>
                            <span className="qualifications__line"></span>
                        </div>
                    </div>

                    <div className="qualifications__data">
                        <div></div>

                        <div>
                            <span className="qualifications__rounder"></span>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications