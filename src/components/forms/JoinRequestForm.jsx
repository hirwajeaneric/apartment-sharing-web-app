import React, { useState } from 'react'
import { FormContainer } from '../styled-components/formsStyledComponent'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useParams } from 'react-router-dom';
import { CustomFormControlOne } from '../styled-components/generalComponents';

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
      <CustomFormControlOne sx={{ width: '100%' }} size='small'>
        <InputLabel id="gender">Gender</InputLabel>
        <Select labelId="gender" id="gender" name='gender' value={formData.gender} onChange={handleFormInputs} label="Gender">
          <MenuItem value="">
              <em>None</em>
          </MenuItem>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
          <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem>
        </Select>
      </CustomFormControlOne>
      <TextField type='number' variant='outlined' style={{ width: '100%' }} label='age' id='age' size='small' value={formData.age} name='age' onChange={handleFormInputs}/>
      <TextField id="outlined-multiline-static" style={{ width: '100%' }} label="Message" multiline rows={4} defaultValue="Default Value" name='comment' value={formData.comment} onChange={handleFormInputs} />
      
      <Button style={{ marginTop: '20px' }} variant='contained' color='primary' size='small' type='submit'>Submit Request</Button>
    </FormContainer>
  )
}
