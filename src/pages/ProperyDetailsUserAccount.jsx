import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';

export default function ProperyDetailsUserAccount() {
  const params = useParams();
  return (
    <div>
      <Helmet>
        <title>Property details</title>
        <meta name="description" content={`Details for property number: ${params.propertyId}.`} /> 
      </Helmet>
      PropertyDetailsUserAccount
    </div>
  )
}
