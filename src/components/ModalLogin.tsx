import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import logoMarvel from '../assets/images/logo-marvel.png';

const ModalLogin: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Container sx={{ marginBottom: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia>
                  <img src={`${logoMarvel}`} alt="logo-marvel" width="200" />
                </CardMedia>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle
                      sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      label="With sx"
                      variant="standard"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <AccountCircle
                      sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                    />
                    <TextField
                      id="input-with-sx"
                      label="With sx"
                      variant="standard"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Modal>
  );
};

export default ModalLogin;
