import { List, StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/login">log In</StyledNavLink>
        </li>
      </List>
    </nav>
  );
};

export default AuthNav;
