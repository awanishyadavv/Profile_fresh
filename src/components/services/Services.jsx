import React from 'react'
import './Services.css';
import { ImCheckmark2 } from "react-icons/im";

const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Have Worked On</h2>

        <div className="container services__container">
            <article className='services'>
                <div className='service__head'>
                    <h3>Analysis</h3>
                </div>
                <ul className='services__list'>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Data Cleaning & Preperation (Excel, Alteryx)</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Data Visualization(Excel, Power BI)</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Data Interpretation and Reporting(Excel, Alteryx)</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Custom Dashboard Creation(Excel, Power BI)</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Interactive Reporting(Excel, Power BI, Alteryx)</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Alteryx work-Flow Design(Alteryx Designer)</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Alteryx Reporting & Integration(Alteryx Designer)</p>
                    </li>
                </ul>
            </article>
            <article className='services'>
                <div className='service__head'>
                    <h3>Web Devlopment</h3>
                </div>

                <ul className='services__list'>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>HTML/CSS Development</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Javascript Library(React Development)</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Responsive Web Development</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Frontend Frameworks and Libraries</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Version Control with GitHub</p>
                    </li>
                </ul>
            </article>
            <article className='services'>
                <div className='service__head'>
                    <h3>UI/UX Design(Figma)</h3>
                </div>

                <ul className='services__list'>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Wireframing and Prototyping</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>UI Design</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>UX Design</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Responsive Design</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Handoff to Developers</p>
                    </li>
                    <li>
                    <ImCheckmark2 className='service__list-icon'/>
                    <p>Collaboration and Feedback Gathering</p>
                    </li>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services;