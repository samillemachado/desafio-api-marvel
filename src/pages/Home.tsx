import React from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pag from '../components/Pag';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
      <Content />
      <Content />
      <Pag />
      <Footer />
    </>
  );
};

export default Home;
