import img1 from '../../images/svg-1.svg';
import img2 from '../../images/svg-2.svg';
import img3 from '../../images/svg-3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusice app that allows you to send unlimited transctions without getting charged any fees.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: img1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headLine: 'Login to your account at anytime',
  description:
    'We have you covered no matter where you are located. All you need is n internet connection and a phone or computer',
  buttonLabel: 'Learn more',
  imgStart: true,
  img: img2,
  alt: 'Online payment',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'JJoin our Team',
  headLine: 'Creating an account is extremely easy',
  description:
    'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go',
  buttonLabel: 'Sign Up',
  imgStart: false,
  img: img3,
  alt: 'Card',
  dark: false,
  primary: false,
  darkText: true,
};
