import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function RentRequestList() {
  return (
    <div>
      <Helmet>
        <title>Rent requests</title>
        <meta name="description" content={`List of all rent requests, both sent by me and those sent to me.`} /> 
      </Helmet>
      RentRequestList
    </div>
  )
}
