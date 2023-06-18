import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { CustomCarousel, CustomPaper } from '../styled-components/generalComponents';
import { APIS } from '../../utils/APIS';

export default function ImageCarousel(props) {
  const { pictures, height } = props;
  const [images, setImages] = useState([]);
  useEffect(()=> {
    setImages(pictures);
  },[pictures])
 
  return (
    <CustomCarousel>
      { images && images.map((image, index) => 
        <CustomPaper key={index}>
          <img src={`${APIS.files.property}${image}`} alt={image} />
        </CustomPaper>
      )}
    </CustomCarousel>
  )
}
