import React, { useState } from 'react'
import { FormContainer } from '../styled-components/formsStyledComponent'
import { Button, TextField } from '@mui/material'
import { useParams } from 'react-router-dom';

export default function JoinRequestForm() {
  const params =  useParams();
  const [formData, setFormData] = useState({
    propertyId: params.id,
    joinPost: '',
    requestingUserId: '',
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    comment: '',
  });

  const handleFormInputs = event => {
    setFormData({ ...formData, [event.target.name] : event.target.value });
    console.log(formData);
  }

  const submitRequest = e => {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <FormContainer onSubmit={submitRequest} style={{ flexDirection:'column', marginTop: '20px' }}>
      <TextField variant='outlined' style={{ width: '100%' }} label='Full Name' id='fullName' size='small' value={formData.fullName} name='fullName' onChange={handleFormInputs}/>
      <TextField variant='outlined' style={{ width: '100%' }} label='Email' id='email' size='small' value={formData.email} name='email' onChange={handleFormInputs}/>
      <TextField variant='outlined' style={{ width: '100%' }} label='Phone' id='phone' size='small' value={formData.phone} name='phone' onChange={handleFormInputs}/>
      
      <Button variant='contained' color='primary' size='small' type='submit'>Submit Request</Button>
    </FormContainer>
  )
}
