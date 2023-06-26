import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import {
  useDispatch,
  // , useSelector
} from 'react-redux';
// import { selectIsLoading, selectError } from '../redux/contacts/selectors';
// import { fetchContacts } from '../redux/contacts/operations';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';

// import Filter from './Filter/Filter';
// import RegisterForm from './RegisterForm/RegisterForm';
// import LoginForm from './LoginForm/LoginForm';
import { Layout } from './Layout/Layout';
// import Loader from './Loader/Loader';
// import css from '../components/App.module.css';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  // const dispatch = useDispatch();

  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    //   {error && <p>{error}</p>}

    //   <LoginForm />
    //   <RegisterForm />
    //   {/* <p>{contacts.length > 0 && JSON.strigify(contacts, null, 2)}</p> */}
    //   <h1 className={css.phonebook__title}>Phonebook</h1>
    //   <ContactForm />
    //   <h2 className={css.contacts__title}>Contacts</h2>
    //   <Filter />
    //   {isLoading && !error && <Loader />}
    //   <ContactList />
    // </main>

    // <main className={css.phonebook__section}>

    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
};
