import React, { useState, useEffect} from 'react'
import { Helmet } from 'react-helmet-async'
import { InnerContainer } from '../components/styled-components/authenticationPages'
import { HeaderTwo } from '../components/styled-components/generalComponents'
import { PageWithSideMenuContainer } from '../components/styled-components/generalComponents'
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import { APIS } from '../utils/APIS';
import { useParams } from 'react-router-dom';
import ResponseComponent from '../sections/ResponseComponent';

export default function UserAccountSettings() {
  const params =  useParams();
  const [open, setOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ message: '', severity: ''});
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    nationality: '',
    natianalId: '',
    passportNumber:'',
    email: '',
    phone: '',
    profilePicture:''
  });
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('usrInfo'));
    axios.get(APIS.userApis.findById+user.id)
    .then(response => {
      setUserInfo(response.data.user);
    })
    .catch(error => console.log(error));
  },[])

  const handleProfilePicture = (e) => {
    setUserInfo({...userInfo, profilePicture: e.target.files[0]});
  };

  const handleUserInfoChanges = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  const handleUpdate = e => {
    e.preventDefault();

    setIsProcessing(true);
    axios.post(APIS.userApis.update+userId, userInfo)
    .then(response => {
      setTimeout(() => {
        if (response.status === 201) {
          setIsProcessing(false);
          setResponseMessage({ message: 'Rent request sent', severity:'success'});
          setOpen(true);
          window.location.reload();
        }
      },3000);
    })
    .catch(error => {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setIsProcessing(false);
        setResponseMessage({ message: error.response.data.msg, severity:'error'})
        setOpen(true);
      }
    })
  }

  return (
    <>
      <Helmet>
        <title>Account settings</title>
        <meta name="description" content={`User account details.`} /> 
      </Helmet>
      <InnerContainer style={{ width: '100%', alignItems:'flex-start', margin: '0', background: 'none', borderTop: 'none' }}>
        <HeaderTwo style={{ margin: '0', borderBottom: '1px solid rgb(120,116,116, 0.5)', paddingBottom: '10px', width: '100%' }}>Settings</HeaderTwo>
        <PageWithSideMenuContainer style={{ backgroundColor: 'white', padding: '20px', marginTop: '20px', borderRadius: '10px', border: '1px solid #d1e0e0' }}>
          <div className='profile-picture'>
            {userInfo.profilePicture ?
            <img src='' alt='' />:
            <img src='/imgs/user_avatar_white.png' alt='' />}
            <TextField type='file' name='profilePicture' onChange={handleProfilePicture} size='small' variant='outlined' id='profilePicture' />
          </div>
          <form onSubmit={handleUpdate}>
            <TextField name='fullName' style={{ width: '100%' }} value={userInfo.fullName} onChange={handleUserInfoChanges} label={'Full name'} id='email' size='small' />
            <TextField name='nationality' style={{ width: '100%' }} value={userInfo.nationality} onChange={handleUserInfoChanges} label={'Nationality'} id='nationality' size='small' />
            <TextField name='nationalId' style={{ width: '100%' }} value={userInfo.natianalId} onChange={handleUserInfoChanges} label={'National id'} id='natianalId' size='small' />
            <TextField name='passportNumber' style={{ width: '100%' }} value={userInfo.passportNumber} onChange={handleUserInfoChanges} label={'Passport number'} id='passportNumber' size='small' />
            <TextField name='email' style={{ width: '100%' }} value={userInfo.email} onChange={handleUserInfoChanges} label={'Email'} id='email' size='small' />
            <TextField name='phone' style={{ width: '100%' }} value={userInfo.phone} onChange={handleUserInfoChanges} label={'Phone'} id='phone' size='small' />
            <Button type='submit' size='small' variant='contained' color='primary'>EDIT</Button>
          </form>
        </PageWithSideMenuContainer>
      </InnerContainer>
      <ResponseComponent 
        message={responseMessage.message} 
        severity={responseMessage.severity}
        open={open} 
        handleClose={handleClose} 
      />
    </>
  )
}
