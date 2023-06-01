import React from 'react'
import { FullWidthContainer, HeaderOne, HeaderTwo, PageSizedContainer } from '../styled-components/generalComponents'
import SearchForm from '../forms/SearchForm';

export default function Banner() {
  return (
    <FullWidthContainer 
      style={{ 
          background:'url("/imgs/bannerImage.jpg"), rgba(0,0,0,0.5)',
          backgroundSize:'cover',
          backgroundBlendMode: 'darken',
          backgroundRepeat: 'no-repeat',
      }}>
      <PageSizedContainer style={{ height: '100vh' }}>
          <div style={{ width: '80%'}}>
            <HeaderOne style={{color: 'white' }}>Find your best stay with few searches.</HeaderOne>
            <SearchForm />
            <HeaderTwo style={{color: 'white',}}>45 free apartments, 10 to join, 10 for sale. </HeaderTwo>
          </div>
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
