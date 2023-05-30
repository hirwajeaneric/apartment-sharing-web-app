import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contracts() {
  return (
    <div>
      <Helmet>
        <title>List of contract</title>
        <meta name="description" content={`List of contracts.`} /> 
      </Helmet>
      Contracts
    </div>
  )
}
