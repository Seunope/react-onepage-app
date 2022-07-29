import React from 'react';
import './SectionTwo.css';

function SectionTwo({
  img,
  alt,
  lightBg,
  caption,
  headline,
  location,
  description,
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className="container">
          <div className="home__hero-text-wrapper2">
            <h1 className="heading">{headline}</h1>
            <p className="home__hero-subtitle">{description}</p>
          </div>

          <div className="home__hero-row">
            <div className="col">
              <div>
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
            <div className="col">
              <div>
                <ul>
                  <li>
                    <div>
                      <p className="home__list-circle">Step 1</p>
                      <div>
                        <h3>{caption}</h3>
                        <p>{location}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="home__list-circle">Step 2</p>
                      <div>
                        <h3>{caption}</h3>
                        <p>{location}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="home__list-circle">Step 3</p>
                      <div>
                        <h3>{caption}</h3>
                        <p>{location}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
