import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FullWidthContainer, HeaderThree, PageSizedContainer, PageWithSideMenuContainer, SideMenu } from '../components/styled-components/generalComponents';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnedProperties, getProperties } from '../redux/features/propertySlice';

export default function UserAccount() {
  const dispatch = useDispatch();

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem('usrInfo'));
    dispatch(getProperties(userInfo.id));
    dispatch(getOwnedProperties(userInfo.id));
    // Add Call to updating numbers and the array of rent requests
  }, [dispatch]);

  const {
    isLoading, 
    numberOfRentedProperties,
    numberOfOwnedProperties, 
    numberOfTenants, 
  } = useSelector(state => state.property);

  return (
    <FullWidthContainer>
      <PageSizedContainer>
        <PageWithSideMenuContainer style={{ margin: '40px 0', padding: '10px' }}>
          {isLoading ? 
          <p>Loading...</p> :
          <>
            <div className='leftSide'>
              <SideMenu>
                <HeaderThree>Properties</HeaderThree>
                <NavLink to={'overview'}>
                  <span>Overview</span> 
                </NavLink>
                <NavLink to={'owned-properties'}>
                  <span>Owned</span> 
                  <span className='quantity'>{numberOfOwnedProperties}</span>
                </NavLink>
                <NavLink to={'rented-properties'}>
                  <span>Rented</span> 
                  <span className='quantity'>{numberOfRentedProperties}</span>
                </NavLink>
                
                <HeaderThree className='menu-header'>Tenants</HeaderThree>
                <NavLink to={'tenants'}>
                  <span>My Tenants</span> 
                  <span className='quantity'>{numberOfTenants}</span>
                </NavLink>
                <NavLink to={'rent-requests'}>
                  <span>Rent Requests</span> 
                  <span className='quantity'>10</span>
                </NavLink>
                <NavLink to={'join-requests'}>
                  <span>Join Requests</span> 
                  <span className='quantity'>8</span>
                </NavLink>

                <HeaderThree className='menu-header'>Reports</HeaderThree>
                <NavLink to={'contracts'}>
                  <span>Contracts</span> 
                  <span className='quantity'>1</span>
                </NavLink>

                <HeaderThree className='menu-header'>Settings</HeaderThree>
                <NavLink to={'settings'}>
                  <span>My Account</span> 
                </NavLink>
              </SideMenu>
            </div>
            <div className='rightSide'>
              <Outlet />
            </div>
          </>}
        </PageWithSideMenuContainer>
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
