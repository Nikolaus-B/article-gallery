import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 50px;
  padding: 0px 30px;
  border-bottom: 2px solid #e7e9fc;
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderLink = styled(NavLink)`
  color: #2e2f42;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #778899;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const HeaderItem = styled.li``;
