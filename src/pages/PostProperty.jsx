import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FullWidthContainer, PageSizedContainer } from '../components/styled-components/generalComponents'
import PostPropertyForm from '../components/forms/PostPropertyForm';
import CustomizedBanner from '../components/sections/CustomizedBanner';

export default function PostProperty() {
  return (
    <FullWidthContainer style={{ flexDirection: 'column',}}>
      <Helmet>
        <title>Post new property</title>
        <meta name="description" content={`Post a new property.`} /> 
      </Helmet>
      <CustomizedBanner title={'Post new property.'} height={'20vh'} />
      <PageSizedContainer style={{ flexDirection: 'column', margin: '40px 0 40px', padding: '10px'}}>
        <PostPropertyForm />
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
