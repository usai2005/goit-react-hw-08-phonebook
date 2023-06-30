import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  list-style: none;

  li {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #086265;
  font-size: 25px;
  text-decoration: none;
  font-weight: 500;

  &.active {
    padding-bottom: 4px;

    border-bottom: 2px solid #086265;
  }
`;
