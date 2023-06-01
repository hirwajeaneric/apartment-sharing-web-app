import React from 'react'
import { FullWidthContainer, PageSizedContainer } from '../styled-components/generalComponents'

export default function Banner() {
  return (
    <FullWidthContainer 
      style={{ 
          background:'url("/imgs/bannerImage.jpg"), rgba(0,0,0,0.5)',
          backgroundSize:'cover',
          backgroundBlendMode: 'darken',
          backgroundRepeat: 'no-repeat',
      }}>
      <PageSizedContainer>
          <h1>Hello World</h1>
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
