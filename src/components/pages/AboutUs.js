import React from 'react';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';
import { homeObjTwo, homeObjThree } from '../../utilities/data';

function AboutUs() {
  return (
    <>
      <SectionTwo {...homeObjTwo} />
      <SectionThree {...homeObjThree} />
    </>
  );
}

export default AboutUs;
