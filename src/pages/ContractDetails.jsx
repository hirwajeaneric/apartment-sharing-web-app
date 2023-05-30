import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function ContractDetails() {
  return (
    <div>
      <Helmet>
        <title>Contract details</title>
        <meta name="description" content={`Contract details.`} /> 
      </Helmet>
      ContractDetails
    </div>
  )
}
