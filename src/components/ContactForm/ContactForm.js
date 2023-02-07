import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NameLabel, Input, FormBlock } from './ContactForm.styled';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

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
      <form onSubmit={handleSubmit}>
        <FormBlock>
          <NameLabel>
            Name
            <Input
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </NameLabel>

          <NameLabel>
            Number
            <Input
              value={number}
              onChange={handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </NameLabel>
          <button type="submit">Add contact</button>
        </FormBlock>
      </form>
    </>
  );
};
