import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

const NavList = styled.ul`
  text-transform: uppercase;
  font-size: 0.8em;
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const NavListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 5px 15px;
  font-size: 1.25em;
  :hover {
    color: red !important;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  :hover {
    color: #E4E4E4;
  }
`;

const Banner = styled.header`
  display: flex;
`;

const LogoContainer = styled.div`
  flex: 1 0 20%;
  font-size: 2em;
`;

const NavBox = styled.div`
  flex: 1 0 80%;
`;

const PrimaryNav = ({ brandLogo, pages }) => (
  <Banner>
    <LogoContainer>
      <h3>{brandLogo}</h3>
    </LogoContainer>
    <NavBox>
      <NavList>
        <Router>
          {pages.map((page, i) => (
            <NavListItem key={i}>
              <StyledLink to={page.url}>{page.title}</StyledLink>
            </NavListItem>
          ))}
        </Router>
      </NavList>
    </NavBox>
  </Banner>
);

PrimaryNav.propTypes = {
  brandLogo: PropTypes.node.isRequired,
  pages: PropTypes.arrayOf(PropTypes.object)
};

export default PrimaryNav;