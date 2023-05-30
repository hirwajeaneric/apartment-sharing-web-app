import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function JoinRequestList() {
  return (
    <div>
      <Helmet>
        <title>Join requests</title>
        <meta name="description" content={`List of all join requests, both sent by me and those sent to me.`} /> 
      </Helmet>
      JoinRequestList
    </div>
  )
}
