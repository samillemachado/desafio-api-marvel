/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Link,
  ListItem,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logoMarvel from '../assets/images/logo-marvel.png';
import defaultTheme from '../config/theme/Default';
// import ModalLogin from './ModalLogin';

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
        <ListItem
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            pr: 15,
            pl: 15,
          }}
        >
          <Typography className="scale-up-center" variant="h5">
            <Link
              href="/"
              underline="none"
              sx={{
                color: defaultTheme.palette.primary.main,
                fontFamily: defaultTheme.typography.fontFamily,
              }}
            >
              CHARACTERS
            </Link>
          </Typography>
          <Typography className="scale-up-center" variant="h5">
            <Link
              href="/comics"
              underline="none"
              sx={{
                color: defaultTheme.palette.primary.main,
                fontFamily: defaultTheme.typography.fontFamily,
              }}
            >
              COMICS
            </Link>
          </Typography>
          <ListItem sx={{ margin: 0, padding: 0, width: 200 }}>
            <Tooltip title="Ir para site oficial Marvel" followCursor>
              <Link href="https://www.marvel.com/">
                <img src={`${logoMarvel}`} alt="logo-marvel" width="200" />
              </Link>
            </Tooltip>
          </ListItem>
          <Typography className="scale-up-center" variant="h5">
            <Link
              href="/mycollection"
              underline="none"
              sx={{
                color: defaultTheme.palette.primary.main,
                fontFamily: defaultTheme.typography.fontFamily,
              }}
            >
              MY COLLECTION
            </Link>
          </Typography>
          <Typography className="scale-up-center" variant="h5">
            <Link
              href="/mycollection"
              underline="none"
              sx={{
                color: defaultTheme.palette.primary.main,
                fontFamily: defaultTheme.typography.fontFamily,
              }}
              // onClick={() => handleOpen(state)}
            >
              LOGIN
              {/* <ModalLogin /> */}
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
          paddingRight: 20,
        }}
      >
        <TextField
          sx={{
            color: defaultTheme.palette.primary.light,
            marginRight: 2,
          }}
          id="standard-size-small"
          label="Search Character"
          variant="standard"
          size="small"
        />
        <SearchIcon sx={{ mr: 2 }} />
      </Stack>
    </>
  );
};

export default Header;
