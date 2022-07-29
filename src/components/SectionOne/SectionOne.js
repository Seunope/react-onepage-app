import React from 'react';
import './SectionOne.css';

function SectionOne({ img, alt, imgStart, headline, description }) {
  return (
    <>
      <div className={'home__hero-section2'}>
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className={'heading dark'}>{headline}</h1>
                <p className={'home__hero-subtitle dark'}>{description}</p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <div id="my-div">
                  <img src={img} alt={alt} className="home__hero-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
