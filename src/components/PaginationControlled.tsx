import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Stack } from '@mui/material';
import defaultTheme from '../config/theme/Default';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // useEffect(() => {}, [page]);

  return (
    <Stack
      spacing={2}
      sx={{
        background: defaultTheme.palette.primary.light,
        height: 100,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
