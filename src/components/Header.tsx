/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logoMarvel from '../assets/images/logo-marvel.png';

const Header: React.FC = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          height: 150,
          bgcolor: '#fff',
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
          <Link href="#">CREATORS</Link>
        </Typography>
        <Typography>
          <Link href="#">SERIES</Link>
        </Typography>
      </Stack>
      <Stack
        sx={{ display: 'flex', alignItems: 'flex-end', bgcolor: '#202020' }}
      >
        <SearchIcon sx={{ color: '#fff', mr: 1, my: 0.5 }} />
        <TextField
          sx={{ color: '#fff' }}
          id="input-with-sx"
          label="Search Character"
          variant="standard"
        />
      </Stack>
    </>
  );
};

export default Header;
