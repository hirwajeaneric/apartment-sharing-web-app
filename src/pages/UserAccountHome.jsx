import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { StatsCard, ThreeSidedContainer } from '../components/styled-components/generalComponents'
import { InnerContainer } from '../components/styled-components/authenticationPages'
import { Link } from 'react-router-dom'
import { ArrowForward } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { getOwnedProperties, getProperties } from '../redux/features/propertySlice'

export default function UserAccountHome() {
  const dispatch = useDispatch();

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem('usrInfo'));
    dispatch(getProperties(userInfo.id));
    dispatch(getOwnedProperties(userInfo.id));
  }, [dispatch]);

  const { numberOfRentedProperties, numberOfOwnedProperties, numberOfTenants } = useSelector(state => state.property);

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
            <p>{numberOfOwnedProperties}</p>
          </StatsCard>
          <StatsCard>
            <div>
              <h4>Rented Apartments</h4>
              <Link to={'/'}><span>View Apartments</span> <ArrowForward /></Link>
            </div>
            <p>{numberOfRentedProperties}</p>
          </StatsCard>
          <StatsCard>
            <div>
              <h4>Tenants</h4>
              <Link to={'/tenants'}><span>View List</span> <ArrowForward /></Link>
            </div>
            <p>{numberOfTenants}</p>
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
