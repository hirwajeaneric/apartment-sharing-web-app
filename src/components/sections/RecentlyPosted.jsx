import React from 'react';
import { CustomPropertyCard, FullWidthContainer, HeaderOne, PageSizedContainer, TopLeftFlexAlignedContainer } from '../styled-components/generalComponents';
import { Button, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function RecentlyPosted() {
  const navigate = useNavigate();
  const cards = [1, 2, 3];
  return (
    <FullWidthContainer>
      <PageSizedContainer style={{ flexDirection: 'column', margin: '80px 0'}}>
        <HeaderOne style={{color: 'black', textAlign: 'left', width: '100%', margin: '0 0 40px', padding:'0 20px 20px', borderBottom: '1px solid gray'}}>Recently Posted</HeaderOne>
        <TopLeftFlexAlignedContainer style={{ justifyContent: 'center' }}>
          <Grid container spacing={4} sx={{ width: '100%' }}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <CustomPropertyCard>
                  <CardMedia component="div" sx={{ pt: '56.25%',}} image="https://source.unsplash.com/random?wallpapers" />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <span style={{ padding: '4px 12px', background: 'rgba(100, 100, 255, 0.5)' }}>For Rent</span>
                    <Typography variant="h5" component="h2" style={{ marginTop: '20px' }}>
                      <LocationOn /> <strong>Kimisagara</strong>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => navigate('/property/230483423d98h23')}>View Details</Button>
                  </CardActions>
                </CustomPropertyCard>
              </Grid>
            ))}
          </Grid>
        </TopLeftFlexAlignedContainer>
      </PageSizedContainer>
    </FullWidthContainer>
  )
}
