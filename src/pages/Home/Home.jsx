import { selectIsLoggedIn } from '../../redux/selectors';
import { useSelector } from 'react-redux';

import {
  List,
  StyledNavLink,
  Container,
  Title,
  LinkContainer,
  Text,
} from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Title>Welcome to the Phonebook application!</Title>
      {!isLoggedIn ? (
        <List>
          <li>
            <p>Please</p>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </li>
          <li>
            <p>or</p>
            <StyledNavLink to="/login">log In</StyledNavLink>
          </li>
        </List>
      ) : (
        <LinkContainer>
          <Text>Your</Text>
          <StyledNavLink to="/phoneBook">Phonebook</StyledNavLink>
        </LinkContainer>
      )}
    </Container>
  );
};

export default Home;
