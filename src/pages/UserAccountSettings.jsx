import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function UserAccountSettings() {
  return (
    <>
      <Helmet>
        <title>Account settings</title>
        <meta name="description" content={`User account details.`} /> 
      </Helmet>
      Settings
    </>
  )
}
