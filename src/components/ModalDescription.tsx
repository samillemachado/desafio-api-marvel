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
import { selectById } from '../store/modules/characters/characterSlice';
import { useAppSelector } from '../store/types-hooks';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

interface ModalProps {
  modalState: boolean;
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDescription: React.FC<ModalProps> = ({
  modalState,
  setModalState,
}) => {
  const handleClose = () => {
    setModalState(false);
  };

  const selectedCharacter = useAppSelector((state) => state.selectCharacter);

  const character = useAppSelector((state) =>
    selectById(state, selectedCharacter)
  );

  return (
    <Modal
      open={modalState}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container sx={{ marginBottom: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 300, height: 250, background: 'primary' }}
                  image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
                  alt={`${character?.name}`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                      component="div"
                      variant="h4"
                      sx={{
                        height: 30,
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
                      pl: 2,
                      pb: 2,
                      pr: 2,
                      pt: 2,
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{
                        height: 150,
                        fontFamily: 'Roboto',
                        textAlign: 'justify',
                        overflow: 'auto',
                      }}
                    >
                      {`${character?.description}`}
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
