/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Container,
  Link,
  ListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logoMarvel from '../assets/images/logo-marvel.png';
import defaultTheme from '../config/theme/Default';

const Header: React.FC = () => {
  return (
    <Container>
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
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Typography variant="h5">
            <Link
              href="#"
              underline="none"
              sx={{ color: defaultTheme.palette.primary.main }}
            >
              CHARACTERS
            </Link>
          </Typography>
          <ListItem sx={{ margin: 0, padding: 0, width: 200 }}>
            <img src={`${logoMarvel}`} alt="logo-marvel" width="200" />
          </ListItem>
          <Typography variant="h5">
            <Link
              href="#"
              underline="none"
              sx={{ color: defaultTheme.palette.primary.main }}
            >
              MY COLLECTION
            </Link>
          </Typography>
        </ListItem>
      </Stack>
      <Stack
        sx={{
          marginBottom: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          bgcolor: defaultTheme.palette.primary.main,
          height: 55,
        }}
      >
        <TextField
          sx={{
            color: defaultTheme.palette.primary.light,
            marginBottom: 1,
            marginRight: 2,
          }}
          id="standard-size-small"
          label="Search Character"
          variant="standard"
          size="small"
        />
        <SearchIcon sx={{ mr: 2 }} />
      </Stack>
    </Container>
  );
};

export default Header;
