import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Welcome to ISMA.</title>
        <meta name="description" content={`The best apartment sharing application for students and solo travellers.`} /> 
      </Helmet>
      Home
    </div>
  )
}
