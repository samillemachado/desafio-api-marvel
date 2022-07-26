import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pag from '../components/Pag';
import ContentCards from '../components/ContentCards';
import { getAllCharacters } from '../store/modules/characters/charactersSlice';
import { useAppDispatch } from '../store/types-hooks';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  return (
    <>
      <Header />
      <ContentCards />
      <Pag />
      <Footer />
    </>
  );
};

export default Home;
