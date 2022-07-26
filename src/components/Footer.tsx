import { Stack, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#202020',
        height: '100px',
        justifyContent: 'center',
        margin: 0,
      }}
    >
      <Typography sx={{ color: '#fff', fontFamily: 'Roboto', fontWeight: 300 }}>
        - Desafio API Developer Marvel -
      </Typography>
      <Typography sx={{ color: '#fff', fontFamily: 'Roboto', fontWeight: 300 }}>
        por Samille B. Machado para &copy; Growdev - 2022
      </Typography>
    </Stack>
  );
};

export default Footer;
