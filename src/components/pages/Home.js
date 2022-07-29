import React from 'react';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import SectionThree from '../SectionThree/SectionThree';
import { homeObjOne, homeObjTwo, homeObjThree } from '../../utilities/data';

function Home() {
  return (
    <>
      <SectionOne {...homeObjOne} />
      <SectionTwo {...homeObjTwo} />
      <SectionThree {...homeObjThree} />
    </>
  );
}

export default Home;
