import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NameLabel, Input, FormBlock } from './ContactForm.styled';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import toast from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    const newContact = contacts.find(contact => contact.name === name);
    if (newContact) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Box
        sx={{
          mt: '42px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                Name
              </Typography>
              <TextField
                value={name}
                onChange={handleChange}
                required
                fullWidth
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                type="text"
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                Number
              </Typography>
              <TextField
                value={number}
                onChange={handleChange}
                required
                fullWidth
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                type="tel"
                name="number"
                label="Number"
                id="number"
                autoComplete="new-number"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </Box>
      </Box>
    </>
  );
};
