import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TopBackground = styled.div`
  background: linear-gradient(
    94.2deg,
    #3f4b69 0%,
    rgba(166, 78, 146, 0.99) 100%
  );
  width: 100%;
  height: 225px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const LogoEdit = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  & svg {
    width: 150px;
    height: 90px;
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  & svg {
    width: 150px;
    height: 90px;
  }
  /* padding: 4px 16px; */
`;

export const ContainerList = styled.ul`
  margin: 0px;
  display: flex;
  list-style: none;

  & > li {
    padding-left: 16px;
  }

  & > li,
  a {
    text-decoration: none;
    color: white;
  }

  a {
    font-weight: 500;
  }

  a:hover {
    font-weight: bold;
  }
`;

const activeClassName = "active";
export const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  position: relative;
  &.${activeClassName} {
    font-weight: bold;
    .bar {
      position: absolute;
      bottom: -13px;
      height: 7px;
      width: 100%;
      background-color: #e76f51;
    }
  }
`;
