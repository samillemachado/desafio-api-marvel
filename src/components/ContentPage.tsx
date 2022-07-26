import React from 'react';
import styled from 'styled-components';
import ContentCards from './ContentCards';
import parallaxMarvel from '../assets/images/parallax-marvel.jpg';

const ContentPageStyled = styled.div`
  background-image: url(${parallaxMarvel});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
`;

const ContentPage: React.FC = () => {
  return (
    <ContentPageStyled>
      <ContentCards />
    </ContentPageStyled>
  );
};

export default ContentPage;
