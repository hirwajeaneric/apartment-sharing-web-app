import React from 'react'
import { Helmet } from 'react-helmet-async'
import { InnerContainer } from '../components/styled-components/authenticationPages'
import { HeaderTwo } from '../components/styled-components/generalComponents'

export default function RentedProperties() {
  return (
    <div>
      <Helmet>
        <title>Rented properties</title>
        <meta name="description" content={`Rented properties.`} /> 
      </Helmet>
      <InnerContainer style={{ width: '100%', alignItems:'flex-start', margin: '0', background: 'none', borderTop: 'none' }}>
        <HeaderTwo style={{ margin: '0', borderBottom: '1px solid rgb(120,116,116, 0.5)', paddingBottom: '10px', width: '100%' }}>Rented Properties</HeaderTwo>
        
      </InnerContainer>
    </div>
  )
}
