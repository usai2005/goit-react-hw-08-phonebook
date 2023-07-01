import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { selectIsLoggedIn, selectIsUserLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { Layout } from './Layout/Layout';
import authOperations from '../redux/auth/authOperations';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const PhoneBookPage = lazy(() => import('../pages/PhoneBook/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(selectIsUserLoading);
  const isUserLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [isUserLoggedIn, dispatch]);

  return isUserLoading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
