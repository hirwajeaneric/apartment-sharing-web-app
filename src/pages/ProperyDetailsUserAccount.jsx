import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom';
import { InnerContainer } from '../components/styled-components/authenticationPages';
import { CustomLeftContainer, CustomRightContainer, HeaderTwo, LeftContainer, RightContainer, TwoSidedContainer } from '../components/styled-components/generalComponents';
import PropertyDetailsForm from '../components/forms/PropertyDetailsForm';
import PostPropertyForm from '../components/forms/PostPropertyForm';

export default function ProperyDetailsUserAccount() {
  const params = useParams();

  return (
    <div>
      <Helmet>
        <title>Property details</title>
        <meta name="description" content={`Details for property number: ${params.propertyId}.`} /> 
      </Helmet>
      <InnerContainer style={{ width: '100%', alignItems:'flex-start', margin: '0', background: 'none', borderTop: 'none' }}>
        
        <TwoSidedContainer style={{ alignItems: 'flex-start'}}>
          <CustomLeftContainer style={{ justifyContent:'flex-start', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            <HeaderTwo style={{ margin: '0', borderBottom: '1px solid rgb(120,116,116, 0.5)', paddingBottom: '10px', width: '100%' }}>Property Details</HeaderTwo>
            <PropertyDetailsForm />
          </CustomLeftContainer>
          <CustomRightContainer style={{ justifyContent:'flex-start', flexDirection: 'column' }}>
            <HeaderTwo style={{ margin: '0', borderBottom: '1px solid rgb(120,116,116, 0.5)', paddingBottom: '10px', width: '100%' }}>Post Apartment</HeaderTwo>
            <PostPropertyForm />
          </CustomRightContainer>
        </TwoSidedContainer>

        {/* <TwoSidedContainer style={{ alignItems: 'flex-start', flexDirection:'column'}}>
          <HeaderTwo style={{ margin: '0', borderBottom: '1px solid rgb(120,116,116, 0.5)', paddingBottom: '10px', width: '100%' }}>Property Details</HeaderTwo>
          <PropertyDetailsForm />
        </TwoSidedContainer> */}

        {/* <LeftContainer style={{ justifyContent:'flex-start', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          </LeftContainer>
          <RightContainer style={{ justifyContent:'flex-start', flexDirection: 'column' }}>
          </RightContainer> */}
      </InnerContainer>
    </div>
  )
}
