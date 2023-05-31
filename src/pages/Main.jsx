import React from 'react'
import NavigationBar from '../components/sections/NavigationBar';
import Footer from '../components/sections/Footer';
import { Outlet } from 'react-router-dom';
import { MainAppContainer } from '../components/styled-components/generalComponents';

export default function Main() {
  return (
    <MainAppContainer>
        <NavigationBar />
        <Outlet />
        <Footer />
    </MainAppContainer>
  )
}
