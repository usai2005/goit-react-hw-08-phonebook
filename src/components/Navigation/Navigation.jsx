import { List, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contacts">Phonebook</StyledNavLink>
        </li>
      </List>
    </nav>
  );
};

export default Navigation;
