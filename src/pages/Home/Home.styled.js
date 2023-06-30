import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #086265;
  font-size: 25px;
  text-decoration: none;
  font-weight: 500;

  padding-bottom: 4px;

  border-bottom: 2px solid #086265;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #065254;
  margin-bottom: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  color: #086265;
  font-size: 20px;
  font-weight: 500;
`;
