import React from 'react'
import NavigationBar from '../components/sections/NavigationBar';
import Footer from '../components/sections/Footer';
import { Outlet } from 'react-router-dom';

export default function Main() {
  return (
    <>
        <NavigationBar />
        <Outlet />
        <Footer />
    </>
  )
}
