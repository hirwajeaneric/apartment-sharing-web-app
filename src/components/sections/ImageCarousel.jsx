import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';

export default function ImageCarousel() {
  var items = [
    {
      name: "Image 1",
      file: "/imgs/img-12-01-2023-pexels-alex-staudinger-1732414.jpg"
    },
    {
      name: "Image 2",
      file: "/imgs/img-04-01-2023-img-14-11-2022-pexels-alex-qian-2343465.jpg"
    },
    {
      name: "Image 2",
      file: "/imgs/img-12-01-2023-pexels-chris-goodwin-32870.jpg"
    },
    {
      name: "Image 2",
      file: "/imgs/img-14-11-2022-pexels-binyamin-mellish-1396122.jpg"
    }
  ];

  return (
    <Carousel 
      sx={{ width: '100%' }}>
        { items.map( (item, i) => <Item key={i} item={item} /> )}
    </Carousel>
  )
}

function Item(props) {
  return (
    <Paper sx={{ width: '100%' }}>
        <img style={{ width: '100%' }} src={props.item.file} alt={props.item.name} />
    </Paper>
  )
}
