import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa6";
import { PiCertificateLight } from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-background">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about__me-btn">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Skills</h5>
              <small>10+ Tools Working</small>
            </article>

            <article className="about__card">
              <PiCertificateLight className="about__icon" />
              <h5>Certifications</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <FaRegFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            "An aspiring graduate equipped with expertise in data cleansing,
            preparation, and visualization, I bring a solid foundation honed
            through training in SQL, Excel, and Alteryx Designer at Pratian.
            Eager to further broaden my skill set and practical experience and
            proficiency in:
          </p>
          <ul className="about__skills-set">
            <li>Excel, Alteryx Designer, and SQL (Oracle certified)</li>
            <li>
              Successful execution of diverse projects utilizing HTML, CSS, and
              React.
            </li>
            <li>
              Proficiency in full-cycle project management, overseeing projects
              from inception to successful completion
            </li>
          </ul>
          <p>
            My commitment to transparent and consistent communication ensures
            that updates are frequent, keeping us aligned throughout our
            collaboration".
          </p>
          <a href="#contact" className="btn btn-primary btn__small-devices">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
