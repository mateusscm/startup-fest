import React from "react";
import Logo from "../../assets/svg/Logo";
import { useHistory } from "react-router-dom";
import {
  NavHeader,
  ContainerList,
  NavItem,
  TopBackground,
} from "./HeaderNavigation.style";

export default function HeaderNavigation({ routes }) {
  const history = useHistory();
  return (
    <>
      <TopBackground />
      <NavHeader>
        <div
          onClick={() => history.push("/")}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <Logo />
        </div>
        <ContainerList>
          {routes?.map((route) => {
            return (
              <li key={Math.random()}>
                <NavItem to={route.path}>
                  {route.alias}
                  <div className="bar" />
                </NavItem>
              </li>
            );
          })}
        </ContainerList>
      </NavHeader>
    </>
  );
}
