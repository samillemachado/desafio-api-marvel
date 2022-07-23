import { Stack, Typography } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          bgcolor: '#202020',
          height: '100px',
        }}
      >
        <Typography sx={{ color: '#fff' }}>
          Desenvolvido por Samille B. Machado para &copy; Growdev - 2022
        </Typography>
      </Stack>
      ;
    </>
  );
};

export default Footer;
