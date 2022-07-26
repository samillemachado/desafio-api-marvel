import React from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import defaultTheme from '../config/theme/Default';

const Pag: React.FC = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        background: defaultTheme.palette.primary.light,
        height: 100,
        marginTop: 15,
        paddingTop: 5,
        paddingBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pagination count={10} color="primary" />
    </Stack>
  );
};
export default Pag;
