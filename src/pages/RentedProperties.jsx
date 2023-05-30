import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function RentedProperties() {
  return (
    <div>
      <Helmet>
        <title>Rented properties</title>
        <meta name="description" content={`Rented properties.`} /> 
      </Helmet>
      RentedProperties
    </div>
  )
}
