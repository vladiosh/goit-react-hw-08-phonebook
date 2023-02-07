import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';

import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
};
