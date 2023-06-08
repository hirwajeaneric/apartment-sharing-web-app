import React from 'react';
import { Paper } from '@mui/material';
import { CustomCarousel } from '../styled-components/generalComponents';
import { APIS } from '../../utils/APIS';

export default function ImageCarousel({pictures}) {
  console.log(pictures);
  return (
    <CustomCarousel>
        { pictures.map((picture, index) => <Item key={index} picture={picture} /> )}
    </CustomCarousel>
  )
}

function Item(props) {
  console.log(props.picture);
  return (
    <Paper sx={{ width: '100%' }}>
        <img style={{ width: '100%' }} src={`${APIS.files.property}${props.picture}`} alt={props.picture} />
    </Paper>
  )
}
