import React, { useEffect } from 'react'
import { FullWidthContainer, PageSizedContainer, TwoSidedContainer } from '../styled-components/generalComponents'
import { MdOutlineApartment } from 'react-icons/md';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import { DesktopNav, Logo } from '../styled-components/navigationStyledComponents';

export default function NavigationBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  const [userInfo, setUserInfo] = useState({
    id: '',
    email: '',
    fullName: '',
    phone: '',
    nationality: '',
    nationalId: '',
    passportNumber: '',
    profilePicturer: '',
  });
  
  useEffect(()=> {
    setUserInfo(JSON.parse(localStorage.getItem('usrInfo')));
    // setUserInfo(localStorage.getItem('usrInfo'));
  },[])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signup = (e) => {
    e.preventDefault();


  }

  const signin = (e) => {
    e.preventDefault();

    
  }

  const signout = () => {
    localStorage.removeItem('usrTkn');
    localStorage.removeItem('usrInfo');
    navigate('/');
  }

  return (
    <FullWidthContainer style={{ background: 'white' }}>
      <PageSizedContainer>
        <TwoSidedContainer>
          <Logo to={'/'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', fontWeight: '700'}}>
            <MdOutlineApartment /> ISMA
          </Logo>
          <DesktopNav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/aboutus'}>About Us</NavLink>
            <NavLink to={'/contactus'}>Contact Us</NavLink>
            <NavLink to={'/post'}>Post New Property</NavLink>
            {localStorage.getItem('usrTkn') &&
              <NavLink to={`/user/${userInfo.fullName.split(' ').join('')}`}>My Account</NavLink>
            }
            {!localStorage.getItem('usrTkn') && 
              <>
                <button type='button' onClick={signin}>Sign In</button>
                <button type='button' onClick={signup}>Sign Up</button>
              </>
            }
            {localStorage.getItem('usrTkn') && 
              <div>
                <IconButton size="large" sx={{ padding: '0px' }} aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                  <AccountCircle style={{ color: 'green' }}/>
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={Boolean(anchorEl)} onClose={handleClose}>
                  <MenuItem onClick={() => { navigate(`/user/${userInfo.fullName.split(' ').join('')}/settings`); handleClose(); }}>Profile/Settings</MenuItem>
                  <MenuItem onClick={() => { signout(); handleClose(); }}>Log out</MenuItem>
                </Menu>
              </div>
            }
          </DesktopNav>
        </TwoSidedContainer>
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
