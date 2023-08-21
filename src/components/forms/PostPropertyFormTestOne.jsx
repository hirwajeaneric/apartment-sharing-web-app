import React, { useEffect } from 'react'
import { TwoSidedContainer } from '../styled-components/generalComponents'
import axios from 'axios';
import { APIS } from '../../utils/APIS';
import { BsCheck2Circle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function PostPropertyFormTestOne() { 
  
  useEffect(() => {
    var user = JSON.parse(localStorage.getItem('usrInfo'));
    axios.post(APIS.propertyApis.updateLatest , { ownerId: user.id, status: 'For Rent' })
    .then(response => {
      if (response.status === 200) {
        console.log(response.data.message);
      }
    })
    .catch(error => console.error(error));
  },[]);

  return (
    <TwoSidedContainer style={{ flexDirection: 'column', justifyContent: 'center', alignItems:'center', gap: '20px', background: 'white', padding: '20px 10px', border: '1px solid #d1e0e0', borderRadius: '5px' }}>
      <BsCheck2Circle style={{ fontSize: '400%', color: 'green' }}/>
      <p>Successfully uploaded a new property</p>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}>Go to Home</Link>
    </TwoSidedContainer>
  )
}