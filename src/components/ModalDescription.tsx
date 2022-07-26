import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import defaultTheme from '../config/theme/Default';
import { selectAll } from '../store/modules/characters/charactersSlice';
import { useAppSelector } from '../store/types-hooks';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};

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
      <Box sx={style}>
        <Container sx={{ marginBottom: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: 250 }}
                  image={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                  alt={`${character?.name}`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                      component="div"
                      variant="h4"
                      sx={{
                        fontFamily: defaultTheme.typography.fontFamily,
                        color: defaultTheme.palette.primary.main,
                      }}
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
                      Lorem Ipsum passages, and more recently with desktop
                      publishing software like Aldus PageMaker including
                      versions of Lorem Ipsum.
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ marginTop: 1 }}>
            <Grid item xs={3}>
              <Paper
                elevation={2}
                sx={{
                  maxWidth: 345,
                  height: 230,
                  marginBottom: 2,
                  borderRadius: 0,
                }}
              >
                <img src="" alt="Imagem da Comics" width="370" />
              </Paper>
              <Typography
                variant="subtitle2"
                sx={{
                  marginBottom: 5,
                  textAlign: 'center',
                }}
              >
                Título da Comics
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Modal>
  );
};

export default ModalDescription;
