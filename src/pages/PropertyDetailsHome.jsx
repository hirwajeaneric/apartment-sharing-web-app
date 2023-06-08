import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom'
import { FullWidthContainer, HeaderTwo, PageSizedContainer, PropertyDescriptionSection } from '../components/styled-components/generalComponents';
import { PageWithSideBarContainer } from '../components/styled-components/generalComponents';
import ImageSlider from '../components/sections/ImageCarousel';
import PropertyMajorDetails from '../components/sections/PropertyMajorDetails';
import LocationMap from '../components/sections/LocationMap';
import RentRequestForm from '../components/forms/RentRequestForm';
import JoinRequestForm from '../components/forms/JoinRequestForm';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyDetails } from '../redux/features/propertySlice';

export default function PropertyDetailsHome() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropertyDetails(params.id));
  },[dispatch, params.id]);

  const { selectedProperty, isLoading } = useSelector((state) => state.property);
  // console.log(selectedProperty);

  return (
    <FullWidthContainer>
      <Helmet>
        <title>Property details</title>
        <meta name="description" content={`Details for property number: ${params.propertyId}.`} /> 
      </Helmet>
      <PageSizedContainer style={{ flexDirection: 'column', marginTop:'40px', padding: '0 10px' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <HeaderTwo style={{color: 'black', textAlign:'left'}}><strong>Apartment {selectedProperty.status} in {selectedProperty.location}</strong></HeaderTwo>
          <HeaderTwo style={{color: 'red', textAlign:'left', fontSize: '210%'}}><strong>RWF</strong> {selectedProperty.rentPrice}</HeaderTwo>
        </div>
        <PageWithSideBarContainer style={{ margin:'40px 0' }}>
          <div className='leftSide'>
            <ImageSlider pictures={selectedProperty.picturers} />
            <PropertyDescriptionSection>
              <HeaderTwo>Description</HeaderTwo>
              <p>
                {selectedProperty.description}
              </p>
            </PropertyDescriptionSection>
            <PropertyMajorDetails descriptions={selectedProperty} />
            <LocationMap coordinates={selectedProperty.mapCoordinates} />
          </div>

          <div className='rightSide' style={{ boxShadow: '0 1.5px 5px 0 rgba(0, 0, 0, 0.19)', padding: '20px', background: 'white' }}>
            {selectedProperty.status === 'For Rent' ?
              <>
              <HeaderTwo>Do you want to Rent this Apartment?</HeaderTwo>
              <p style={{ fontWeight: '400', margin: '20px 0', lineHeight: '23px' }}>Fill in the form bellow to reserve the permission to rent this Apartment.</p>
            </>
            :
            selectedProperty.status === 'For Join' ?
            <>
              <HeaderTwo>Do you want to Join this Apartment?</HeaderTwo>
              <p style={{ fontWeight: '400', margin: '20px 0', lineHeight: '23px' }}>Fill in the form bellow to send a join request.</p>
            </>
            :
            <></>  
          }

            {!localStorage.getItem('usrTkn') && selectedProperty.status === 'For Rent' ? <Button type='button' variant='contained' color='primary' size='small' style={{ marginBottom: '20px' }} onClick={() => navigate('/signin')}>Rent this apartment</Button> : <></>}
            {localStorage.getItem('usrTkn') && selectedProperty.status === 'For Rent' ? <RentRequestForm /> : <></>}

            {!localStorage.getItem('usrTkn') && selectedProperty.status === 'For Join' ? <Button type='button' variant='contained' color='secondary' size='small' onClick={() => navigate('/signin')}>Join this apartment</Button> : <></>}
            {localStorage.getItem('usrTkn') && selectedProperty.status === 'For Join' ? <JoinRequestForm /> : <></>}
          </div>
        </PageWithSideBarContainer>
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
