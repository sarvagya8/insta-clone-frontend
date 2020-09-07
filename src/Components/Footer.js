import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  flex-wrap: wrap;
  padding-bottom: 15px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">about us</Link>
      </ListItem>
      <ListItem>
        <Link href="#">support</Link>
      </ListItem>
      <ListItem>
        <Link href="#">press</Link>
      </ListItem>
      <ListItem>
        <Link href="#">api</Link>
      </ListItem>
      <ListItem>
        <Link href="#">jobs</Link>
      </ListItem>
      <ListItem>
        <Link href="#">privacy</Link>
      </ListItem>
      <ListItem>
        <Link href="#">terms</Link>
      </ListItem>
      <ListItem>
        <Link href="#">directory</Link>
      </ListItem>
      <ListItem>
        <Link href="#">profiles</Link>
      </ListItem>
    </List>
    <Copyright>
      Benny Joo's Instagram-Clone {new Date().getFullYear()} &copy;
    </Copyright>
  </Footer>
);
