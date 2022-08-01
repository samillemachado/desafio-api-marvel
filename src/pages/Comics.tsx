import React, { useEffect } from 'react';
import ContentComics from '../components/ContentComics';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PaginationControlled from '../components/PaginationControlled';
import { getAllComics } from '../store/modules/comics/comicsSlice';
import { useAppDispatch } from '../store/types-hooks';

const Comics: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllComics());
  }, []);
  return (
    <>
      <Header />
      <ContentComics title="" thumbnail="" />
      <PaginationControlled />
      <Footer />
    </>
  );
};

export default Comics;
