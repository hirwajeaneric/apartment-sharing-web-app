import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FullWidthContainer, PageSizedContainer } from '../components/styled-components/generalComponents'
import CustomizedBanner from '../components/sections/CustomizedBanner';
import PostPropertyFormTestOne from '../components/forms/PostPropertyFormTestOne';

export default function FinishPostProperty() {
  return (
    <FullWidthContainer style={{ flexDirection: 'column',}}>
      <Helmet>
        <title>Property Upload Successful</title>
        <meta name="description" content={`Property Upload Successful.`} /> 
      </Helmet>
      <CustomizedBanner title={'Property Upload Successful!'} height={'20vh'} />
      <PageSizedContainer style={{ flexDirection: 'column', margin: '40px 0 40px', padding: '10px'}}>
        <PostPropertyFormTestOne />
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
