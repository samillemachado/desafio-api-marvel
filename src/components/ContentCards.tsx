import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { selectAll } from '../store/modules/characters/charactersSlice';
import defaultTheme from '../config/theme/Default';
import { useAppSelector } from '../store/types-hooks';
import ModalDescription from './ModalDescription';

const ContentCards: React.FC = () => {
  const charactersRedux = useAppSelector(selectAll);

  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const handleOpen = (selectedId: number) => {
    setOpen(true);
    setId(selectedId);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {charactersRedux.map((item) => {
          return (
            <Grid key={item.id} item xs={3}>
              <Card sx={{ maxWidth: 345, height: 450, marginBottom: 5 }}>
                <CardMedia
                  component="img"
                  height="270"
                  image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{ fontFamily: defaultTheme.typography.fontFamily }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: 'Roboto', overflow: 'hidden' }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    size="small"
                    sx={{
                      fontFamily: defaultTheme.typography.fontFamily,
                      color: defaultTheme.palette.primary.main,
                    }}
                    onClick={() => handleOpen(item.id)}
                  >
                    MORE
                  </Button>
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
