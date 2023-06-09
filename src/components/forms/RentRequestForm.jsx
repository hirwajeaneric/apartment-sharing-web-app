import React, { useEffect, useState } from 'react'
import { FormContainer } from '../styled-components/formsStyledComponent'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useParams } from 'react-router-dom';
import { CustomFormControlOne } from '../styled-components/generalComponents';
import { useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RentRequestForm() {
  const params =  useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    propertyId: '',
    requestingUserId: '',
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    comment: '',
    nationalId: '',
    passportNumber: ''
  });

  const [progress, setProgress] = useState({ value: '', disabled: false});
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ message: '', severity: ''})

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const resetFields = () => {
    setFormData({
      gender: '',
      age: '',
      comment: '',
      nationalId: '',
      passportNumber: ''
    });
  }

  useEffect(()=> {
    setUser(JSON.parse(localStorage.getItem('usrInfo')));
    setFormData({
      ...formData, 
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    })
  },[formData, user])

  const handleFormInputs = event => {
    setFormData({ ...formData, [event.target.name] : event.target.value });
    console.log(formData);
  }

  const submitRequest = e => {
    e.preventDefault();

    formData.propertyId = params.propertyId;
    formData.requestingUserId = user.id;


    console.log(formData);
    dispatch({ type: 'rentRequest/addRentRequest', payload: formData })
  }

  return (
    <FormContainer onSubmit={submitRequest} style={{ flexDirection:'column', marginTop: '20px' }}>
      <TextField 
        disabled 
        variant='outlined' 
        style={{ width: '100%' }} 
        label='Full Name' 
        id='fullName' 
        size='small' 
        value={formData.fullName} 
        name='fullName' 
        onChange={handleFormInputs}
      />
      <TextField 
        disabled 
        variant='outlined' 
        style={{ width: '100%' }} 
        label='Email' 
        id='email' 
        size='small' 
        value={formData.email} 
        name='email' 
        onChange={handleFormInputs}
      />
      <TextField 
        disabled 
        variant='outlined' 
        style={{ width: '100%' }} 
        label='Phone' 
        id='phone' 
        size='small' 
        value={formData.phone} 
        name='phone' 
        onChange={handleFormInputs}
      />
      <TextField 
        type='number' 
        variant='outlined' 
        style={{ width: '100%' }} 
        label='National Id' 
        id='nationalId' 
        size='small' 
        value={formData.nationalId} 
        name='nationalId' 
        onChange={handleFormInputs} 
        helperText="For Rwandan Citizens"
      />
      <TextField 
        variant='outlined' 
        style={{ width: '100%' }} 
        label='Passport Number' 
        id='passportNumber' 
        size='small' 
        value={formData.passportNumber} 
        name='passportNumber' 
        onChange={handleFormInputs} 
        helperText="For non-Rwandan Citizens (Internationals)"
      />
      <CustomFormControlOne sx={{ width: '100%' }} size='small'>
        <InputLabel id="gender">Gender</InputLabel>
        <Select 
          labelId="gender" 
          id="gender" 
          name='gender' 
          value={formData.gender} 
          onChange={handleFormInputs} 
          label="Gender"
        >
          <MenuItem value="">
              <em>None</em>
          </MenuItem>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
          <MenuItem value={'Prefer not to say'}>Prefer not to say</MenuItem>
        </Select>
      </CustomFormControlOne>
      <TextField 
        type='number' 
        variant='outlined' 
        style={{ width: '100%' }} 
        label='age' 
        id='age' 
        size='small' 
        value={formData.age} 
        name='age' 
        onChange={handleFormInputs}
      />
      <TextField 
        id="outlined-multiline-static" 
        style={{ width: '100%' }} 
        label="Message" 
        multiline 
        rows={4} 
        defaultValue="Default Value" 
        name='comment' 
        value={formData.comment} 
        onChange={handleFormInputs} 
      />
      
        <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent:'space-between', alignItems:'center', width: '100%' }}>
          {!progress.disabled && 
            <Button type='submit' variant='contained' size='small' color='primary'>SUBMIT</Button>
          }
          {progress.disabled && 
            <Button type='submit' variant='contained' size='medium' color='primary' disabled>{progress.value}</Button>
          }
          <Button type='cancel' variant='contained' color='secondary' size='small' onClick={resetFields}>CANCEL</Button>
        </div>

      {/* Response message  */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={responseMessage.severity} sx={{ width: '100%' }}>{responseMessage.message}</Alert>
      </Snackbar>
    </FormContainer>
  )
}
