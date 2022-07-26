/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, ListItem, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logoMarvel from '../assets/images/logo-marvel.png';
import avengersMarvel from '../assets/images/avengers-marvel.jpg';

const Header: React.FC = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          height: 120,
          bgcolor: '#fff',
          margin: 0,
          padding: 0,
        }}
      >
        <ListItem sx={{ ml: 1, width: 200 }}>
          <img src={`${logoMarvel}`} alt="logo-marvel" width="200" />
        </ListItem>
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            color: '#EC1D24',
          }}
        >
          <Typography variant="h5">
            <Link href="#" underline="none">
              CHARACTERS
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link href="#" underline="none">
              COMICS
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link href="#" underline="none">
              FILMS
            </Link>
          </Typography>
        </ListItem>
        <ListItem sx={{ mr: 1, width: 200 }}>
          <img src={`${avengersMarvel}`} alt="universo-marvel" width="200" />
        </ListItem>
      </Stack>
      <Stack
        sx={{
          marginBottom: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          bgcolor: '#202020',
          height: 100,
        }}
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
