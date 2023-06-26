import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import authSelectors from '../../redux/auth/authSelectors';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
// import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
