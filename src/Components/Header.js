import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Compass, EmptyHeart, User, Logo } from "./Icons";
import { ME } from "../sharedQueries";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background-color: white;
  border: none;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    text-align: left;
    margin-right: auto;
  }
  &:last-child {
    text-align: right;
    margin-left: auto;
  }
`;

const SearchInput = styled(Input)`
  height: 25px;
  width: 70%;
  text-align: center;
  padding: 10px 15px;
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const { data, loading } = useQuery(ME);
  if (loading) return "";
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <Logo />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              placeholder="Search"
              value={search.value}
              onChange={search.onChange}
            />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <HeaderLink to="/explore">
            <Compass />
          </HeaderLink>
          <HeaderLink to="/notifications">
            <EmptyHeart />
          </HeaderLink>
          {!data.me ? (
            <HeaderLink to="/#">
              <User />
            </HeaderLink>
          ) : (
            <HeaderLink to={`/users/${data.me.username}`}>
              <User />
            </HeaderLink>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
