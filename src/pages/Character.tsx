import React from 'react';
import Content from '../components/Content';
import Description from '../components/Description';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Character: React.FC = () => {
  return (
    <>
      <Header />
      <Description />
      <Content />
      <Footer />
    </>
  );
};

export default Character;
