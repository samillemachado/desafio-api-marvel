import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ModalLogin from '../components/ModalLogin';
import PaginationControlled from '../components/PaginationControlled';

const MyCollection: React.FC = () => {
  return (
    <>
      <Header />
      <ModalLogin />
      <PaginationControlled />
      <Footer />
    </>
  );
};

export default MyCollection;
