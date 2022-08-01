import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContentCards from '../components/ContentCards';
import { getAllCharacters } from '../store/modules/characters/charactersSlice';
import { useAppDispatch } from '../store/types-hooks';
import PaginationControlled from '../components/PaginationControlled';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  return (
    <>
      <Header />
      <ContentCards />
      {/* <ModalDescription modalState={open} setModalState={setOpen} /> */}
      <PaginationControlled />
      <Footer />
    </>
  );
};

export default Home;
