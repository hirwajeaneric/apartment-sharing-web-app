import React, { useEffect } from 'react'
import { FullWidthContainer, PageSizedContainer, TwoSidedContainer } from '../styled-components/generalComponents'
import { MdOutlineApartment } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle, Close, Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { DesktopNav, Logo, MobileNav, MobileNavButton } from '../styled-components/navigationStyledComponents';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NavigationBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [userInfo, setUserInfo] = useState({ id: '', email: '', fullName: '', phone: '', nationality: '', nationalId: '', passportNumber: '', profilePicturer: '' });
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => setOpen(true);
  const handleCloseNav = () => setOpen(false);

  const toggleMenu = () => {
    setOpenNav(!openNav);
  }

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
        <TwoSidedContainer style={{ position: 'relative' }}>
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


          {/* Mobile navigation  */}
          <MobileNavButton onClick={handleOpenNav}>
            {open ? <Close /> : <MenuIcon />}
          </MobileNavButton>
          <Modal open={open} onClose={handleCloseNav} aria-labelledby="modal-nav" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <MobileNav>
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
              </MobileNav>
            </Box>
          </Modal>
        </TwoSidedContainer>
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
