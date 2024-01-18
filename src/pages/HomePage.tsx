import React from 'react';
import DefaultLayoutHoc from '../layouts/DefaultLayoutHoc';
import Landing from '../components/Landing';

function HomePage() {
  return (
    <>
      <Landing />
    </>
  )
}

export default DefaultLayoutHoc(HomePage);