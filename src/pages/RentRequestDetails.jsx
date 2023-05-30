import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export default function RentRequestDetails() {
  const params = useParams();
  return (
    <div>
      <Helmet>
        <title>Rent Request details</title>
        <meta name="description" content={`Details of a rent request number: ${params.joinRequestId}.`} /> 
      </Helmet>
      RentRequestDetails
    </div>
  )
}
