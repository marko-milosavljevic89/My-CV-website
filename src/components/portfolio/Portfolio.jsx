import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const data = [
  {
    id:1, 
    image: IMG1,
    title: 'Portfolio',
    github: 'https://github.com/marko-milosavljevic89/portfolio',
    demo: 'https://marko-milosavljevic89.github.io/My-CV-website/'
    
  },
  {
    id:2, 
    image: IMG2,
    title: 'Discogs Browser App',
    github: 'https://github.com/marko-milosavljevic89/discogs',
    demo: 'https://marko-milosavljevic89.github.io/Discogs-browser/'
  },
  {
    id:3, 
    image: IMG3,
    title: 'Aditiv Trade',
    github: 'https://github.com/marko-milosavljevic89/AditivTrade',
    
    
  },

  {
    id:4,
    image: IMG4,
    title: 'Movie Blog',
    github: 'https://github.com/marko-milosavljevic89/Marko-s-Movie-Blog',
    demo: 'https://markov-blog.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {demo ?  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> : ''}
                </div>
            </article>
            )
          })
        }        
      </div>
    </section>
  )
}

export default Portfolio