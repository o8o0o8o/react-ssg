import React from "react";
import { Link } from "react-router-dom";
import routes from "../../shared/routes";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  color: white;
  padding: 10px;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const App = () => {
  return (
    <>
      <Navbar>
        <Logo>My Website</Logo>
        {routes.map(({ name, path }) => {
          return (
            <Link key={path} to={path}>
              {name}
            </Link>
          );
        })}
      </Navbar>
    </>
  );
};

export default App;
