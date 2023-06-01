import React from 'react'
import { FullWidthContainer, LeftContainer, PageSizedContainer, RightContainer, TwoSidedContainer } from '../styled-components/generalComponents'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <FullWidthContainer style={{ background: 'white' }}>
        <PageSizedContainer style={{ flexDirection: 'column', alignItems: 'center' }}>
            <TwoSidedContainer>
              <LeftContainer style={{ background: 'green', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'flex-start', alignItems: 'flex-start', width: '100%' }}>
                  <h3>Useful Links</h3>
                  <Link to={''}>Home</Link>
                  <Link to={''}>About Us</Link>
                  <Link to={''}>Contact Us</Link>
                  <Link to={''}>Post new</Link>
                </div>
              </LeftContainer>
              <RightContainer style={{ background: 'orange', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'flex-start', alignItems: 'flex-start', width: '100%' }}>
                  <h3>Contact Us</h3>
                  <p>
                    ISMA Ltd<br/>
                    KG 541 ST, House No 10<br/>
                    P.O.Box 3009 Kigali<br/>
                    Tel: +250 780 460 848<br/>
                    Email: info@isma.com
                  </p>
                </div>
              </RightContainer>
            </TwoSidedContainer>
            <p 
              style={{ padding: '40px 20px' }}
            >© ISMA Ltd {new Date().getFullYear()}. All Rights Reserved.</p>
        </PageSizedContainer>
    </FullWidthContainer>
  )
}
