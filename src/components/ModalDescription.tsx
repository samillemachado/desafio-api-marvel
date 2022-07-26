import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Modal,
  Typography,
} from '@mui/material';
import React from 'react';
import { selectAll } from '../store/modules/characters/charactersSlice';
import { useAppSelector } from '../store/types-hooks';

interface ModalProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}

const ModalDescription: React.FC<ModalProps> = ({ state, setState, id }) => {
  const handleClose = () => {
    setState(false);
  };

  const character = useAppSelector(selectAll).find((char) => char.id === id);

  return (
    <Modal
      open={state}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container sx={{ marginBottom: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ minWidth: 300, height: 300 }}
                image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                alt={`${character?.name}`}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{ fontSize: '3em' }}
                  >
                    {`${character?.name}`}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pl: 1,
                    pb: 5,
                    pr: 5,
                    pt: 5,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ fontFamily: 'Roboto', textAlign: 'justify' }}
                  >
                    {`${character?.description}`}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper
              elevation={2}
              sx={{ maxWidth: 345, height: 370, marginBottom: 2, borderRadius: 0 }}
            >
              <img src={`${thumbnail}`} alt={title} width="370" />
            </Paper>
            <Typography
              variant="h6"
              sx={{
                marginBottom: 5,
                fontFamily: defaultTheme.typography.fontFamily,
                textAlign: 'center',
              }}
            >
              {title}
            </Typography>            
          </Grid>          
        </Grid>
      </Container>
    </Modal>
  );
};

export default ModalDescription;
