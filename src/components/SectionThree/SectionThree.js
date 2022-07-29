import React from 'react';
import './SectionThree.css';

function SectionThree({ alt, img1, img2, headBody, headTitle }) {
  return (
    <>
      <div className="row">
        <div className="text-float">
          <p style={{ fontSize: '36px' }}>Why Whichride</p>
        </div>
        <div className="col-left">
          <div className="item-container">
            <div className="home__hero-img-wrapper">
              <img src={img1} alt={alt} className="home__hero-img" />
            </div>
            <h1 className="head-title">{headTitle}</h1>
            <p className="head-body">{headBody}</p>
          </div>

          <div className="item-container">
            <div className="home__hero-img-wrapper">
              <img src={img2} alt={alt} className="home__hero-img" />
            </div>
            <h1 className="head-title">{headTitle}</h1>
            <p className="head-body">{headBody}</p>
          </div>
        </div>

        <div className="col-right">
          <div className="item-container2">
            <div className="home__hero-img-wrapper">
              <img src={img1} alt={alt} className="home__hero-img" />
            </div>
            <h1 className="head-title">{headTitle}</h1>
            <p className="head-body">{headBody}</p>
          </div>

          <div className="item-container2">
            <div className="home__hero-img-wrapper">
              <img src={img2} alt={alt} className="home__hero-img" />
            </div>
            <h1 className="head-title">{headTitle}</h1>
            <p className="head-body">{headBody}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
