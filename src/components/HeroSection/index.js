import React, { useState } from 'react';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
  ArrowForward,
} from './HeroElements';

const Hero = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>

        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>

        <HeroBtnWrapper onMouseEnter={onHover} onMouseLeave={onHover}>
          <Button primary="true" dark="true" to="signup">
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
