import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Investment Opportunity Analysis</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target='_blank' className='btn'>Github</a>
            <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Sales Analysis Dashboard</h3>
          <div className="portfolio__item-cta">
            <a href="" target='_blank' className='btn'>Github</a>
            <a href="https://app.powerbi.com/reportEmbed?reportId=9ab8f88e-97ba-4ce8-841f-003bacf14ce5&autoAuth=true&ctid=3e159c4d-f3b3-4781-a79e-126cbb15b2b3" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Element Fishries Development</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/awanishyadavv/Element-fisheries-project.git" target='_blank' className='btn'>Github</a>
            <a href="https://awanishyadavv.github.io/Element-fisheries-project/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Expense Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/awanishyadavv/Expense_Tracker.git" target='_blank' className='btn'>Github</a>
            <a href="https://awanishyadavv.github.io/Expense_Tracker/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Tic-Tac-Toe Game Development</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/awanishyadavv/tic-tac-toe-game.git" target='_blank' className='btn'>Github</a>
            <a href="https://awanishyadavv.github.io/tic-tac-toe-game/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This portfolio Site</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" target='_blank' className='btn'>Github</a>
            <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;