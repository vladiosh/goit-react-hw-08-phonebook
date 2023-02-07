import React from 'react';

import { changeFilter } from '../../redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.currentTarget.value;
    dispatch(changeFilter(value));
  };
  return (
    <Box
      component="label"
      noValidate
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid container>
        <Typography component="h1" variant="h5">
          Find contacts by name
        </Typography>
        <TextField onChange={handleChange} required fullWidth type="text" />
      </Grid>
    </Box>
  );
};

export default Filter;
