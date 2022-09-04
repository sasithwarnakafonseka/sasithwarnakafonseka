import React, { useEffect } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/images/90497-software-development.json";

const BackgroundAnimation = () => (

  <div className='side-image-session'>
    <div className='lottie-session'>
      <Lottie animationData={groovyWalkAnimation} loop={true} />
    </div>
  </div>
);

export default BackgroundAnimation;