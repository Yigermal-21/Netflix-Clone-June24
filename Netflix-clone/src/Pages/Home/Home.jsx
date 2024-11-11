import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from "../../Components/Footer/Footer"
import Banner from '../../Components/Banner/Banner';
import Rowslist from '../../Components/Rows/Rowlist/Rowslist';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Rowslist />
      <Footer />
    </>
  );
};

export default Home;