import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaDotCircle} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Relevant Knowledge</h5>  
      <h2>Skills I Have Aquired</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Advanced</small>
            </div>
          </article>
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>JQuerry</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
        </div>
        <div className="experience__other">
        <h3>Professional  Skills</h3>
        <div className="experience__content">
          <article className="experience__detail">
            <FaDotCircle className="experience__detail-icon"/>
            <div>
              <h4>Other Programing Skills</h4>
              <h5 className='text-light'>SQL - Elementary Knowledge</h5>
              <h5 className='text-light'>Vue.js - Passive Knowledge</h5>              
              <h5 className='text-light'>Git</h5>
            </div>
          </article>
          <article className="experience__detail">
            <FaDotCircle className="experience__detail-icon"/>
            <div>
              <h4>Photo Editing</h4>
              <h5 className='text-light'>Photoshop</h5>
              <h5 className='text-light'>Illustrator</h5>
            </div>
          </article>
          <article className="experience__detail">
            <FaDotCircle className="experience__detail-icon"/>
            <div>
              <h4>Foreign Languages</h4>
              <h5 className='text-light'>English - Fluent</h5>
              <h5 className='text-light'>French - Intermediate</h5>
              <h5 className='text-light'>Hungarian - Intermediate</h5>
            </div>
          </article>   
          <article className="experience__detail">
            <FaDotCircle className="experience__detail-icon"/>
            <div>
              <h4>Video Editing and Compositing</h4>
              <h5 className='text-light'>Premiere Pro</h5>
              <h5 className='text-light'>Nuke</h5>
              <h5 className='text-light'>Moca Pro</h5>
              <h5 className='text-light'>After-Effects</h5>
            </div>
          </article>                 
          <article className="experience__detail">
            <FaDotCircle className="experience__detail-icon"/>
            <div>
              <h4>Microsoft Office</h4>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience