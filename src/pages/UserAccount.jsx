import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FullWidthContainer, HeaderThree, PageSizedContainer, PageWithSideMenuContainer, SideMenu } from '../components/styled-components/generalComponents';

export default function UserAccount() {
  return (
    <FullWidthContainer>
      <PageSizedContainer>
        <PageWithSideMenuContainer style={{ margin: '40px 0', padding: '10px' }}>
          <div className='leftSide'>
            <SideMenu>
              <HeaderThree>Properties</HeaderThree>
              <NavLink to={'overview'}>
                <span>Overview</span> 
              </NavLink>
              <NavLink to={'owned-properties'}>
                <span>Owned</span> 
                <span className='quantity'>1</span>
              </NavLink>
              <NavLink to={'rented-properties'}>
                <span>Rented</span> 
                <span className='quantity'>0</span>
              </NavLink>
              
              <HeaderThree className='menu-header'>Tenants</HeaderThree>
              <NavLink to={'tenants'}>
                <span>My Tenants</span> 
                <span className='quantity'>3</span>
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
        </PageWithSideMenuContainer>
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
