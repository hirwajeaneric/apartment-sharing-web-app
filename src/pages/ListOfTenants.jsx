import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function ListOfTenants() {
  return (
    <div>
      <Helmet>
        <title>List of tenants</title>
        <meta name="description" content={`List of all people who are renting my properties.`} /> 
      </Helmet>
      ListOfTenants
    </div>
  )
}
