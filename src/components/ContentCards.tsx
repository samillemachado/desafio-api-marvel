import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { relative } from 'path';
import { selectAll } from '../store/modules/characters/charactersSlice';
// import { selectAll } from '../store/modules/comics/comicsSlice';
import defaultTheme from '../config/theme/Default';
import { useAppSelector } from '../store/types-hooks';
import ModalDescription from './ModalDescription';

const ContentCards: React.FC = () => {
  const charactersRedux = useAppSelector(selectAll);
  const comicsRedux = useAppSelector(selectAll);

  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const handleOpen = (selectedId: number) => {
    setOpen(true);
    setId(selectedId);
  };

  return (
    <Container>
      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        {charactersRedux.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={3}>
              <Card
                sx={{
                  maxWidth: 280,
                  height: 450,
                  paddingBotton: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
              >
                <CardMedia
                  className="scale-up-center"
                  component="img"
                  height="270"
                  image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                  onClick={() => handleOpen(item.id)}
                />
                <CardContent sx={{ height: 130 }}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{
                      fontFamily: defaultTheme.typography.fontFamily,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontFamily: 'Roboto',
                      overflow: 'hidden',
                      maxHeight: 45,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    height: 50,
                    alignSelf: 'flex-end',
                    padding: 1,
                    margin: 0,
                    position: 'relative',
                  }}
                >
                  <IconButton
                    size="small"
                    sx={{
                      position: 'absolute',
                      bottom: 10,
                      right: 10,
                      fontFamily: defaultTheme.typography.fontFamily,
                      color: defaultTheme.palette.primary.main,
                    }}
                  >
                    <FavoriteBorderIcon className="scale-up-center" />
                  </IconButton>
                  <ModalDescription state={open} setState={setOpen} id={id} />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ContentCards;
