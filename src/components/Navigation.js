import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="phoneBook">Phonebook</NavLink>}
    </nav>
  );
};

export default Navigation;
