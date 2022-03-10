import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data = [
  {
    id:1, 
    image: IMG1,
    title: 'Portfolio',
    github: 'https://github.com/marko-milosavljevic89/portfolio',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id:2, 
    image: IMG2,
    title: 'Discogs Browser App',
    github: 'https://github.com/marko-milosavljevic89/discogs',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-and-infographics-in-Figma'
  },
  {
    id:3, 
    image: IMG3,
    title: 'Aditiv Trade',
    github: 'https://github.com/marko-milosavljevic89/AditivTrade',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image,title,github, demo}) => {
            return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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