import React from 'react';
import { animateScroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  Container,
  Wrap,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkTitle,
  LinkItem,
  SocialMediaWrap,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About Us</LinkTitle>
              <LinkItem to="/aboutus">How it works</LinkItem>
              <LinkItem to="/aboutus">Testimonials</LinkItem>
              <LinkItem to="/aboutus">Careers</LinkItem>
              <LinkItem to="/aboutus">Investors</LinkItem>
              <LinkItem to="/aboutus">Term of Services</LinkItem>
            </LinkItems>
            <LinkItems>
              <LinkTitle>Contact Us</LinkTitle>
              <LinkItem to="/aboutus">Contact</LinkItem>
              <LinkItem to="/aboutus">Support</LinkItem>
              <LinkItem to="/aboutus">Destinations</LinkItem>
              <LinkItem to="/aboutus">Sponsorships</LinkItem>
            </LinkItems>
          </LinksWrapper>

          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Videos</LinkTitle>
              <LinkItem to="/aboutus">Submit Video</LinkItem>
              <LinkItem to="/aboutus">Ambassadors</LinkItem>
              <LinkItem to="/aboutus">Agency</LinkItem>
              <LinkItem to="/aboutus">Influencer</LinkItem>
            </LinkItems>
            <LinkItems>
              <LinkTitle>Social Media</LinkTitle>
              <LinkItem to="/aboutus">Instagram</LinkItem>
              <LinkItem to="/aboutus">Facebook</LinkItem>
              <LinkItem to="/aboutus">Youtube</LinkItem>
              <LinkItem to="/aboutus">Twitter</LinkItem>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={animateScroll.scrollToTop}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()}. All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Intagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </Wrap>
    </Container>
  );
};

export default Footer;
