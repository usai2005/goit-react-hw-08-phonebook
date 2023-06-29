import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { selectIsUserLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/contacts/contactsOperations';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';

// import Filter from './Filter/Filter';
// import RegisterForm from './RegisterForm/RegisterForm';
// import LoginForm from './LoginForm/LoginForm';
import { Layout } from './Layout/Layout';
import authOperations from '../redux/auth/authOperations';
import Loader from './Loader/Loader';
// import css from '../components/App.module.css';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const PhoneBookPage = lazy(() => import('../pages/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(selectIsUserLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    dispatch(fetchContacts());
  }, []);

  return isUserLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/phoneBook"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/phoneBook"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="phoneBook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
