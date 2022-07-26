import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pag from '../components/Pag';
import ContentPage from '../components/ContentPage';
import { getAll } from '../store/modules/characters/charactersSlice';
import { useAppDispatch } from '../store/types-hooks';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <>
      <Header />
      <ContentPage />
      <Pag />
      <Footer />
    </>
  );
};

export default Home;
