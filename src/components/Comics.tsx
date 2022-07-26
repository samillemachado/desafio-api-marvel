import { Paper, Typography } from '@mui/material';
import React from 'react';
import defaultTheme from '../config/theme/Default';

interface ComicsProps {
  title: string;
  thumbnail: string;
}

const Comics: React.FC<ComicsProps> = ({ title, thumbnail }) => {
  return (
    <>
      <Paper
        elevation={2}
        sx={{ maxWidth: 345, height: 370, marginBottom: 2, borderRadius: 0 }}
      >
        <img src={`${thumbnail}`} alt={title} width="370" />
      </Paper>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 5,
          fontFamily: defaultTheme.typography.fontFamily,
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>
    </>
  );
};

export default Comics;
