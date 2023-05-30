import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export default function JoinRequestDetails() {
  const params = useParams();
  return (
    <div>
      <Helmet>
        <title>Join Request details</title>
        <meta name="description" content={`Details of a join request number: ${params.joinRequestId}.`} /> 
      </Helmet>
      JoinRequestDetails
    </div>
  )
}
