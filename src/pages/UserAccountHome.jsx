import React from 'react'
import { Helmet } from 'react-helmet-async'
import { StatsCard, ThreeSidedContainer } from '../components/styled-components/generalComponents'
import { InnerContainer } from '../components/styled-components/authenticationPages'
import { Link } from 'react-router-dom'
import { ArrowForward } from '@mui/icons-material'

export default function UserAccountHome() {
  return (
    <div>
      <Helmet>
        <title>My account</title>
        <meta name="description" content={`My account dashboard home.`} /> 
      </Helmet>
      <InnerContainer style={{ width: '100%', alignItems:'flex-start', margin: '0', background: 'none', borderTop: 'none' }}>
        <ThreeSidedContainer>
          <StatsCard>
            <div>
              <h4>Owned Properties/Apartments</h4>
              <Link to={'/post'}><span>Post now</span> <ArrowForward /></Link>
            </div>
            <p>0</p>
          </StatsCard>
          <StatsCard>
            <div>
              <h4>Rented Apartments</h4>
              <Link to={'/'}><span>View Apartments</span> <ArrowForward /></Link>
            </div>
            <p>0</p>
          </StatsCard>
          <StatsCard>
            <div>
              <h4>Tenants</h4>
              <Link to={'/tenants'}><span>View List</span> <ArrowForward /></Link>
            </div>
            <p>0</p>
          </StatsCard>
          <StatsCard>
            <div>
              <h4>Rent Requests</h4>
              <Link to={'../rent-requests'}><span>View Requests</span> <ArrowForward /></Link>
            </div>
            <p>0</p>
          </StatsCard>
          <StatsCard>
            <div>
              <h4>Join Requests</h4>
              <Link to={'../join-requests'}><span>View Requests</span> <ArrowForward /></Link>
            </div>
            <p>0</p>
          </StatsCard>
          <StatsCard>
            <div>
              <h4>Contracts</h4>
              <Link to={'../contracts'}><span>My Contracts</span> <ArrowForward /></Link>
            </div>
            <p>0</p>
          </StatsCard>
        </ThreeSidedContainer>
      </InnerContainer>
    </div>
  )
}
