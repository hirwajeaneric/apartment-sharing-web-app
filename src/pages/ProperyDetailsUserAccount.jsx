import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';
import { InnerContainer } from '../components/styled-components/authenticationPages';
import { HeaderTwo } from '../components/styled-components/generalComponents';

export default function ProperyDetailsUserAccount() {
  const params = useParams();
  return (
    <div>
      <Helmet>
        <title>Property details</title>
        <meta name="description" content={`Details for property number: ${params.propertyId}.`} /> 
      </Helmet>
      <InnerContainer style={{ width: '100%', alignItems:'flex-start', margin: '0', background: 'none', borderTop: 'none' }}>
        <HeaderTwo style={{ margin: '0', borderBottom: '1px solid rgb(120,116,116, 0.5)', paddingBottom: '10px', width: '100%' }}>Property Details</HeaderTwo>
        
      </InnerContainer>
    </div>
  )
}
