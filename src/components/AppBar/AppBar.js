import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import { selectIsLoggedIn } from '../../redux/selectors';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
// import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
