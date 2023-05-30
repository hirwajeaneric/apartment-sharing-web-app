import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function PostProperty() {
  return (
    <div>
      <Helmet>
        <title>Post new property</title>
        <meta name="description" content={`Post a new property.`} /> 
      </Helmet>
      PostProperty
    </div>
  )
}
