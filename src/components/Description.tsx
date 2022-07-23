import { Container, Grid } from '@mui/material';
import React from 'react';
import Cards from './Cards';

const Description: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Cards />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Description;
