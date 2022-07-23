/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logoMarvel from '../assets/images/logo-marvel.png';

const Header: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        height: 150,
        bgcolor: '#cfe8fc',
        margin: 0,
        padding: 0,
      }}
    >
      <img src={`${logoMarvel}`} alt="logo-marvel" width="250" />
      <Typography>
        <Link href="#">CHARACTERS</Link>
      </Typography>
      <Typography>
        <Link href="#">COMICS</Link>
      </Typography>
      <Typography>
        <Link href="#">CHARACTERS</Link>
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Search Character"
          variant="standard"
        />
      </Box>
    </Stack>
  );
};

export default Header;
