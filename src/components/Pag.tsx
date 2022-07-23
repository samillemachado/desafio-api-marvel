import React from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';

const Pag: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={12} color="primary" />
    </Stack>
  );
};
export default Pag;
