import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Key Learnings So Far</h2>

      <div className="container experience__container">
        <div className="experience__analyst">
          <h3>Data Analysis</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>SQL</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Excel</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Power BI</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Alteryx Designer</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small>Learning</small>
              </div>
            </article>
          </div>
        </div>

        {/* end of Analysis */}

        <div className="experience__webdeveloper">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill   className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
