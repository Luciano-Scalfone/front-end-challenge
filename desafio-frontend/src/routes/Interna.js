import React from 'react';
import DetailsPage from '../components/DetailsPage';
import Header from '../components/Header';

const Interna = ({ location }) => {
  const { slug } = location;

  return (
    <section>
      <Header />
      <DetailsPage slug={ slug } />
    </section>
  )
}

export default Interna;
