import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function OwnedProperties() {
  return (
    <div>
      <Helmet>
        <title>My properties</title>
        <meta name="description" content={`List of all my properties.`} /> 
      </Helmet>
      OwnedProperties
    </div>
  )
}
