import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function UserAccountHome() {
  return (
    <div>
      <Helmet>
        <title>My account</title>
        <meta name="description" content={`My account dashboard home.`} /> 
      </Helmet>
      UserAccountHome
    </div>
  )
}
