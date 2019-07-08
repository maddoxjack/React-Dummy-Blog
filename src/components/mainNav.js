import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.div`
  background: salmon;
  padding: 20px;
  display: flex;
  list-style: none;
  margin: auto;

  li {
    margin: 0 10px 0 0;
  }
`;

const MainNav = props => {
  const { routes } = props;
  console.log("routes are ", routes);
  return (
    <StyledNav>
      {routes.map(route => (
        <li key={`link-${route.linkName}`}>
          <Link to={route.linkRoutes}>{route.linkName}</Link>
        </li>
      ))}
    </StyledNav>
  );
};

export default MainNav;

MainNav.propTypes = {
  routes: PropTypes.array
};

//this is a purely functional component
