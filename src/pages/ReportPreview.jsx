import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function ReportPreview() {
  return (
    <div>
      <Helmet>
        <title>Report preview</title>
        <meta name="description" content={`Report preview.`} /> 
      </Helmet>
      ReportPreview
    </div>
  )
}
