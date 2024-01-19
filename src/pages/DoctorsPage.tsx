import React from 'react';
import DefaultLayoutHoc from '../layouts/DefaultLayoutHoc';
import Header from '../components/Header';
import DoctorResults from '../components/DoctorResults';

function DoctorsPage() {
  return (
    <>
      <Header />
      <DoctorResults />
    </>
  )
}

export default DefaultLayoutHoc(DoctorsPage);