import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};
