import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FullWidthContainer, HeaderTwo, PageSizedContainer } from '../components/styled-components/generalComponents'
import PostPropertyForm from '../components/forms/PostPropertyForm';

export default function PostProperty() {
  return (
    <FullWidthContainer>
      <Helmet>
        <title>Post new property</title>
        <meta name="description" content={`Post a new property.`} /> 
      </Helmet>
      <PageSizedContainer style={{ flexDirection: 'column', margin: '40px 0', padding: '10px'}}>
        <HeaderTwo style={{color: 'black', textAlign: 'left', width: '100%', margin: '0 0 20px', fontWeight: '600' }}>Post new property</HeaderTwo>
        <PostPropertyForm />
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
