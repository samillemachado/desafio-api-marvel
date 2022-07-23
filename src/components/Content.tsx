import { Container, Grid } from '@mui/material';
import React from 'react';
import Cards from './Cards';

const Content: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Cards />
        </Grid>
        <Grid item xs={3}>
          <Cards />
        </Grid>
        <Grid item xs={3}>
          <Cards />
        </Grid>
        <Grid item xs={3}>
          <Cards />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Content;
