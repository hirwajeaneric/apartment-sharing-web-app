import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { CustomCarousel } from '../styled-components/generalComponents';
import { APIS } from '../../utils/APIS';

export default function ImageCarousel({pictures}) {
  const [images, setImages] = useState([]);
  useEffect(()=> {
    setImages(pictures);
  },[pictures])
 
  return (
    <CustomCarousel>
      { images && images.map((image, index) => 
        <Paper key={index} sx={{ width: '100%' }}>
          <img style={{ width: '100%' }} src={`${APIS.files.property}${image}`} alt={image} />
        </Paper>
      )}
    </CustomCarousel>
  )
}
