// import ContactForm from '../ContactForm';
// import ContactList from '../ContactList';
// import Filter from '../Filter';

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
// import { Container, Head } from './App.styled';

// import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

// return (
//   <Container>
//     <Head>Phonebook</Head>
//     <ContactForm />
//     <Head>Contacts</Head>
//     <Filter />
//     {isLoading && !error && <p>Request in progress...</p>}
//     {error && <p>Something goes wrong</p>}
//     <ContactList />
//   </Container>
// );

export default App;
