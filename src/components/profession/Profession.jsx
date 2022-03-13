import React from 'react'
import './profession.css'
import {BiCheck} from 'react-icons/bi'

const Profession = () => {
  return (
    <section id='professions'>
    <h5>My Professional Background</h5>
    <h2>Work Experience and Education</h2>
    <div className="container professions__container">
      <article className='profession'>
        <div className="profession__head">
          <h3>Work Experience</h3>
        </div>

        <ul className='profession__list'>
          <li>
            <BiCheck className='profession__list-icon'/>
            <div>
              <p>Business Manager</p>            
              <small className='text-light'>Aditiv Trade doo | 2016 - present</small>
            </div>
          </li>
          <li>
            <BiCheck className='profession__list-icon'/>
            <div>
              <p>English Teacher</p>            
              <small className='text-light'>Bibo Global Opportunity | 2014 - 2015</small>
            </div>
          </li>
          <li>
            <BiCheck className='profession__list-icon'/>
            <div>
              <p>Business assistant</p>            
              <small className='text-light'>Aditiv Trade doo | 2012 - 2015</small>
            </div>
          </li>
        </ul>
      </article>
      {/*Work Experience*/}
      <article className='profession'>
        <div className="profession__head">
          <h3>Education</h3>
        </div>

        <ul className='profession__list'>
          <li>
            <BiCheck className='profession__list-icon'/>
            <div>
              <p>Faculty of International Economics</p>
              <h5 className='text-light'>John Naisbitt University</h5>           
              <small className='text-light'>Graduate Economist GPA: 8.23</small>
              
            </div>
          </li>
          <li>
            <BiCheck className='profession__list-icon'/>
            <div>
              <p>X Belgrade Grammar School</p>            
            </div>
          </li>
        </ul>
      </article>
      {/*Education*/}
      <article className='profession'>
        <div className="profession__head">
          <h3>Courses</h3>
        </div>

        <ul className='profession__list'>
          <li>
            <BiCheck className='profession__list-icon'/>
            <div>
              <p>Frontend Development - Java Script Specialization</p>            
              <small className='text-light'>IT Academy | 2020 - 2021</small>
              <h5 className='text-light'>Final project - Aditiv Trade website</h5>
            </div>
          </li>
          <li>
            <BiCheck className='profession__list-icon'/>
            <div>
              <p>Digital Compositing and Video Manipulation</p>            
              <small className='text-light'>Crater VFX Training Center | 2017</small>
            </div>
          </li>
          <li>
            <BiCheck className='profession__list-icon'/>
            <div>
              <p>Digital Image Editing - Photoshop Essentials</p>            
              <small className='text-light'>Crater VFX Training Center | 2017</small>
            </div>
          </li>
        </ul>
      </article>
      {/*Courses*/}
    </div>
    </section>
  )
}

export default Profession