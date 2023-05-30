import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ErrorPage() {
  return (
    <div>
      <Helmet>
        <title>Page not found.</title>
        <meta name="description" content={`Page not found`} /> 
      </Helmet>
        <h1>404</h1>
        <h2>Page not found</h2>
    </div>
  )
}
