import { Container, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { convertCompilerOptionsFromJson } from 'typescript';
import defaultTheme from '../config/theme/Default';
import { selectAll } from '../store/modules/comics/comicsSlice';
import { useAppSelector } from '../store/types-hooks';

interface ContentComicsProps {
  title: string;
  thumbnail: string;
}

const ContentComics: React.FC<ContentComicsProps> = ({ title, thumbnail }) => {
  const comicsRedux = useAppSelector(selectAll);

  return (
    <Container>
      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        {' '}
        {comicsRedux.map((item) => {
          return (
            <Grid key={item.title} item xs={12} lg={2}>
              <Paper
                elevation={2}
                sx={{
                  maxWidth: 170,
                  height: 300,
                  borderRadius: 0,
                }}
              >
                <Stack>
                  <img
                    src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                    alt={title}
                    width="170"
                  />
                </Stack>
              </Paper>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 5,
                  fontFamily: defaultTheme.typography.fontFamily,
                  color: defaultTheme.palette.primary.light,
                  textAlign: 'center',
                }}
              >
                {item.title}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ContentComics;
