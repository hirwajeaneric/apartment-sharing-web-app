import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from '../components/sections/Banner'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Welcome to ISMA.</title>
        <meta name="description" content={`The best apartment sharing application for students and solo travellers.`} /> 
      </Helmet>
      <Banner />
    </>
  )
}
