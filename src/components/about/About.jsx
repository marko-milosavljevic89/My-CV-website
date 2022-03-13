import React from "react";
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>1+ Year Working as a Frontend Developer</small>
                    </article>
                    {/* <article className="about__card">
                        <FiUsers className="about__icon"/>
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                    </article> */}
                    <article className="about__card">
                        <VscFolderLibrary className="about__icon"/>
                        <h5>Projects</h5>
                        <small>3 with more comming every day :)</small>
                    </article>
                </div>
                <p>
                Diligent and well-organized JavaScript developer with
great communication skills. A graduate economist by profession,
film and gaming enthusiast, striving to specialize as a Front-end
developer and build commercially attractive apps and websites.
                </p>
                <a href="#contact" className="btn btn-primary">Contact Me</a>
            </div>                
            </div>    
        </section>
    )
}

export default About