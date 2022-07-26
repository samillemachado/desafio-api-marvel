import { Container, Grid } from '@mui/material';
import React from 'react';
import Comics from './Comics';

const ContentComics: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Comics title="IRON MAN" thumbnail="../assets/images/iron-man.jpg" />
        </Grid>
        <Grid item xs={3}>
          <Comics title="IRON MAN" thumbnail="../assets/images/iron-man.jpg" />
        </Grid>
        <Grid item xs={3}>
          <Comics title="IRON MAN" thumbnail="../assets/images/iron-man.jpg" />
        </Grid>
        <Grid item xs={3}>
          <Comics title="IRON MAN" thumbnail="../assets/images/iron-man.jpg" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentComics;
