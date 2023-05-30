import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function TenantInfo() {
  
  return (
    <div>
      <Helmet>
        <title>Tenant info</title>
        <meta name="description" content={`Details for tenant.`} /> 
      </Helmet>
      TenantInfo
    </div>
  )
}
