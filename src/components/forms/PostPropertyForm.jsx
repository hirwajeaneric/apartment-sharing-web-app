import React, { useEffect, useState } from 'react'
import { CustomFormControlOne, LeftContainer, RightContainer, TwoSidedFormContainer } from '../styled-components/generalComponents'
import { TextField, InputLabel, MenuItem, Select, Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { APIS } from '../../utils/APIS';
import { useParams } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PostPropertyForm() {
  const params = useParams();
  const [userData, setUserData] = useState({});
  const [pictures, setPictures] = useState([]);
  const [formData, setFormData] = useState({
    propertyType: '',
    rentPrice: '',
    location: '',
    mapCoordinates: '',
    dimensions: '',
    description: '',
    bedRooms: '',
    bathRooms: '',
    furnished: '',
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
      propertyType: '',
      rentPrice: '',
      location: '',
      mapCoordinates: '',
      dimensions: '',
      description: '',
      bedRooms: '',
      bathRooms: '',
      furnished: '',
    });
    setPictures([]);
  }

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('usrInfo')));
  },[]);

  const handleChange = ({currentTarget: input}) => { 
    setFormData({...formData, [input.name]: input.value}) 
  };

  const handleChangePropertyType = (event) => {
    setFormData({...formData, propertyType: event.target.value});
  };

  const handleChangeFurnished = (event) => {
    setFormData({...formData, furnished: event.target.value});
  };

  const handleFileInput = (e) => {
    setPictures(e.target.files);
  }

  const handleCreateRecord = (e) => {
    e.preventDefault();

    var data = formData;
    data.ownerId = userData.id; 
    data.status = 'For Rent';
    if (pictures) {
      data.pictures = pictures; 
    }
    console.log(data);

    setProgress({ value: 'Processing ...', disabled: true});

    axios.post(APIS.propertyApis.add , data)
    .then(response => {
      setTimeout(()=>{
        if (response.status === 200) {
          setResponseMessage({ message: response.data.message, severity: 'success' });
          setOpen(true);

          setProgress({ value: '', disabled: false });
          window.location.replace(`/user/${params.fullName}/overview`);
        }
      }, 2000); 
    })
    .catch(error => {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setResponseMessage({ message: error.response.data.msg, severity: 'error' });
        setOpen(true);
        setProgress({ value: '', disabled: false });
      }
    });
  };

  return (
    <TwoSidedFormContainer onSubmit={handleCreateRecord} style={{ justifyContent: 'space-around', background: 'white', padding: '20px 10px', boxShadow: '0 1.5px 5px 0 rgba(0, 0, 0, 0.19)', borderRadius: '5px' }}>
      <LeftContainer style={{ flexDirection: 'column', gap: '20px', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <TextField id="description" style={{ width: '100%' }} size='small' label="description" multiline rows={4} variant="outlined" name='description' value={formData.description || ''} onChange={handleChange} />
        <TextField type='number' id="rentPrice" style={{ width: '100%' }} size='small' label="Rent Price" variant="outlined" name='rentPrice' value={formData.rentPrice || ''} onChange={handleChange}/>
        <TextField id="location" style={{ width: '100%' }} size='small' label="Location" variant="outlined" name='location' value={formData.location || ''} onChange={handleChange} helperText="Use Districts and Sectors. Example: 'Gasabo, Kacyiru'"/>
        <TextField id="mapCoordinates" style={{ width: '100%' }} size='small' label="Map Coordinates" variant="outlined" name='mapCoordinates' value={formData.mapCoordinates || ''} onChange={handleChange} helperText="Paste or add google map coordinates of the apartment. Example: '-1.951059, 30.094097'"/>
      </LeftContainer>
      <RightContainer style={{ flexDirection: 'column', gap: '20px', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <CustomFormControlOne style={{ width: '100%' }} size='small'>
          <InputLabel id="propertyType">Apartment Type</InputLabel>
          <Select labelId="propertyType" id="propertyType" name='propertyType' value={formData.propertyType} onChange={handleChangePropertyType} label="Apartment Type">
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={'1 Bedroom Only'}>1 Bedroom Only</MenuItem>
            <MenuItem value={'1 Bedroom + Living Room'}>1 Bedroom + Living Room</MenuItem>
            <MenuItem value={'2 Bedroom + Living Room'}>2 Bedroom + Living Room</MenuItem>
            <MenuItem value={'3 Bedroom + Living Room'}>3 Bedroom + Living Room</MenuItem>
            <MenuItem value={'4 Bedroom + Living Room'}>4 Bedroom + Living Room</MenuItem>
          </Select>
        </CustomFormControlOne>
        <TextField type='number' id="dimensions" style={{ width: '100%' }} size='small' label="Dimensions" variant="outlined" name='dimensions' value={formData.dimensions || ''} onChange={handleChange} helperText="The dimensions should be in Square Meters." />
        <TextField type='number' id="bedRooms" style={{ width: '100%' }} size='small' label="Bed Rooms" variant="outlined" name='bedRooms' value={formData.bedRooms || ''} onChange={handleChange}/>
        <TextField type='number' id="bathRooms" style={{ width: '100%' }} size='small' label="Bath Rooms" variant="outlined" name='bathRooms' value={formData.bathRooms || ''} onChange={handleChange}/>
        <CustomFormControlOne style={{ width: '100%' }} size='small'>
          <InputLabel id="propertyType">Furnished</InputLabel>
            <Select labelId="furnished" id="furnished" name='furnished' value={formData.furnished} onChange={handleChangeFurnished} label="Furnished">
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={'true'}>Yes</MenuItem>
            <MenuItem value={'false'}>No</MenuItem>
          </Select>
        </CustomFormControlOne>
        <TextField type='file' multiple width={'100%'} id="file" style={{ width: '100%' }} size='small' variant="outlined" onChange={handleFileInput} name='pictures' />
        <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent:'space-between', alignItems:'center', width: '100%' }}>
          {!progress.disabled && <Button type='submit' variant='contained' size='small' color='primary'>SUBMIT</Button>}
          {progress.disabled && <Button type='submit' variant='contained' size='medium' color='primary' disabled>{progress.value}</Button>}
          <Button type='cancel' variant='contained' color='secondary' size='small' onClick={resetFields}>CANCEL</Button>
        </div>
      </RightContainer>
      
      {/* Response message  */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={responseMessage.severity} sx={{ width: '100%' }}>{responseMessage.message}</Alert>
      </Snackbar>
    </TwoSidedFormContainer>
  )
}
