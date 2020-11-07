import React from "react";

import "./ProjectTitleSection.style.scss";

import LazyLoad from "react-lazy-load";
import { ImageLoader } from "../../../components";

const ProjectTitleSection = ({
  project: {
    demoUrl,
    fullPageScreenshotUrl,
    github,
    heroPicUrl_1,
    heroPicUrl_2,
    overview,
    stack,
    title,
  },
}) => {
  return (
    <section className="project__introduction" id="top">
      <div className="project__section__container">
        <div className="project__title__container">
          <div className="project__title__header">{title}</div>
          <div className="project__title__subtitle">{overview}</div>
        </div>
        <div className="project__stack__container">
          <div className="project__tile stack">
            <div className="project__title__subheader">Stack</div>
            <div className="project__stack__subtitle">
              <ul className="project__stack__items">
                <div>
                  {stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </div>
              </ul>
            </div>
          </div>

          {github && (
            <div className="project__tile">
              <div className="project__title__subheader">
                Repository
                <div className="project__stack__subtitle">
                  <a
                    className="project__stack__link"
                    href={github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          )}
          <div className="project__tile">
            <div className="project__title__subheader">
              Demo
              <div className="project__stack__subtitle">
                <a
                  className="project__stack__link"
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {fullPageScreenshotUrl && (
        <LazyLoad
          debounce={false}
          offsetVertical={500}
          className="image__loader"
        >
          <ImageLoader
            src={fullPageScreenshotUrl}
            alt="Fullpage screenshot"
            className="project__title__screenshot"
          />
        </LazyLoad>
      )}
      <div className="project__hero__container">
        {heroPicUrl_1 && (
          <LazyLoad
            debounce={false}
            offsetVertical={500}
            className="image__hero__loader"
          >
            <ImageLoader
              src={heroPicUrl_1}
              alt="Hero Pic screenshot"
              className="project__title__hero"
            />
          </LazyLoad>
        )}
        {heroPicUrl_2 && (
          <LazyLoad
            debounce={false}
            offsetVertical={500}
            className="image__hero__loader"
          >
            <ImageLoader
              src={heroPicUrl_2}
              alt="Hero Pic screenshot"
              className="project__title__hero"
            />
          </LazyLoad>
        )}
      </div>
    </section>
  );
};

export default ProjectTitleSection;
