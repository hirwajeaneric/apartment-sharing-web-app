import React, { useEffect, useState } from 'react'
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
  
  const [user, setUser] = useState({});

  useEffect(() => {
    dispatch(getPropertyDetails(params.id));
  },[dispatch, params.id]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('usrInfo')));
  },[])

  const { selectedProperty, isLoading } = useSelector((state) => state.property);

  return (
    <FullWidthContainer>
      <Helmet>
        <title>Property details</title>
        <meta name="description" content={`Details for property number: ${params.propertyId}.`} /> 
      </Helmet>
      <PageSizedContainer style={{ flexDirection: 'column', marginTop:'40px', padding: '0 10px' }}>
        {
          isLoading ? 
          <p style={{ margin:'40px 0' }}>Loading...</p>:
          <>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <HeaderTwo style={{color: 'black', textAlign:'left'}}><strong>Apartment {selectedProperty.status} in {selectedProperty.location}</strong></HeaderTwo>
            <HeaderTwo style={{color: 'red', textAlign:'left', fontSize: '210%'}}><strong>RWF</strong> {selectedProperty.rentPrice}</HeaderTwo>
          </div>
          <PageWithSideBarContainer style={{ margin:'40px 0' }}>
            <div className='leftSide'>
              <ImageSlider pictures={selectedProperty.pictures} />
              <PropertyDescriptionSection>
                <HeaderTwo>Description</HeaderTwo>
                <p>
                  {selectedProperty.description}
                </p>
              </PropertyDescriptionSection>
              <PropertyMajorDetails descriptions={selectedProperty} />
              <LocationMap coordinates={selectedProperty.mapCoordinates} />
            </div>



            {/* SIDE BAR WITH RENT AND JOIN FORM AND CALL TO ACTION MESSAGES ********************************************************** */}
            
            <div className='rightSide' style={{ boxShadow: '0 1.5px 5px 0 rgba(0, 0, 0, 0.19)', padding: '20px', background: 'white' }}>
              
              {/* This message appears when the selected house is owned by the user who has logen in */}
              {(user !== null && selectedProperty.ownerId === user.id) && <p>Your House</p>}


              {/* CALL TO ACTION MESSAGES  */}
              {user !== null && selectedProperty.status === 'For Rent' && selectedProperty.ownerId !== user.id ?
                <>
                  <HeaderTwo>Do you want to Rent this Apartment?</HeaderTwo>
                  <p style={{ fontWeight: '400', margin: '20px 0', lineHeight: '23px' }}>Fill in the form bellow to reserve the permission to rent this Apartment.</p>
                </>
                :
                user !== null && selectedProperty.status === 'For Join' && selectedProperty.ownerId !== user.id ?
                <>
                  <HeaderTwo>Do you want to Join this Apartment?</HeaderTwo>
                  <p style={{ fontWeight: '400', margin: '20px 0', lineHeight: '23px' }}>Fill in the form bellow to send a join request.</p>
                </>
                :
                <></>  
              }

              {/* CONDITIONS TO DISPLAY RENT FORM */}
              {
                !localStorage.getItem('usrTkn') && selectedProperty.status === 'For Rent' ? 
                <Button 
                  type='button' 
                  variant='contained' 
                  color='primary' 
                  size='small' 
                  style={{ marginBottom: '20px' }} 
                  onClick={() => navigate('/signin')}>
                    Sign in to Rent Apartment
                </Button> : 
                <></>
              }

              {
                user !== null && selectedProperty.status === 'For Rent' && selectedProperty.ownerId !== user.id ? 
                <RentRequestForm /> : 
                <></>
              }

              {/* CONDITIONS FOR JOIN FORM  */}
              {
                !localStorage.getItem('usrTkn') && selectedProperty.status === 'For Join' ? 
                <Button 
                  type='button' 
                  variant='contained' 
                  color='secondary' 
                  size='small' 
                  onClick={() => navigate('/signin')}>
                    Sign in to Join Apartment
                </Button> : 
                <></>
              }
              
              {
                user !== null && selectedProperty.status === 'For Join' && selectedProperty.ownerId !== user.id ? 
                <JoinRequestForm /> : 
                <></>
              }
            </div>
          </PageWithSideBarContainer>
        </>}
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
