import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>  
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Developement</h3>
        <div className="experience__content">
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
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
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>JQuerry</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        </div>
        <div className="experience__other">
        <h3>Other Skills</h3>
        <div className="experience__content">
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>Photoshop</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>Ilustrator</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>Microsoft Office</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>Nuke</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__detail">
            <BsPatchCheckFill className="experience__detail-icon"/>
            <div>
              <h4>Premiere Pro</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience