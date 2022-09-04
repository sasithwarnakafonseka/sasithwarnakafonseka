import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
      <div className="about-text">
        <div className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></div>
        <h1 className="animated animated-text">
          <span className="mr-2">Hey, I'm</span>
          <div className="animated-info">
            <span className="animated-item">Sasith Warnaka</span>
            <span className="animated-item">Web Developer</span>
            <span className="animated-item">System Developer</span>
          </div>
        </h1>
        <div className='text-my-bio'>
          <p>Building a successful product is a challenge. I am highly energetic in user experience development, System and web development.</p>
        </div>

        <div className="custom-btn-group mt-4">
          <a href="/my-cv/wswfonseka.pdf" download={true} className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a>
          <a href="https://buymeacoffee.com/?via=sasithwarn" className="btn custom-btn custom-btn-bg custom-btn-link">Buy Me a Coffee</a>
        </div>
      </div>
    </div>
  </Section>
);

export default Hero;