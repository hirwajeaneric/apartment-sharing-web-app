import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { FullWidthContainer, HeaderTwo, PageSizedContainer } from '../components/styled-components/generalComponents';
import { PageWithSideBarContainer } from '../components/styled-components/generalComponents';

export default function PropertyDetailsHome() {
  const params = useParams();
  return (
    <FullWidthContainer>
      <Helmet>
        <title>Property details</title>
        <meta name="description" content={`Details for property number: ${params.propertyId}.`} /> 
      </Helmet>
      <PageSizedContainer style={{ flexDirection: 'column', marginTop:'40px' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <HeaderTwo style={{color: 'black', textAlign:'left'}}>Apartment For Share in Kibagabaga</HeaderTwo>
          <HeaderTwo style={{color: 'red', textAlign:'left'}}><strong>USD</strong> 200</HeaderTwo>
        </div>
        <PageWithSideBarContainer>
          <div className='leftSide'>
            <h1>Left</h1>
          </div>
          <div className='rightSide'>
            <h1>Right</h1>
          </div>
        </PageWithSideBarContainer>
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
