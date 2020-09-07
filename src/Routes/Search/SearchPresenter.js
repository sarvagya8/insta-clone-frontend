import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import PostCard from "../../Components/PostCard";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  min-height: 85vh;
`;

const UserSection = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, 168px);
  grid-auto-rows: 168px;
  margin-bottom: 50px;
`;

const PostSection = styled.div`
  margin-bottom: 70px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, auto);
  grid-auto-rows: 200px;
  margin-bottom: 50px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`;

const SearchPresenter = ({ loading, data, searchTerm }) => {
  if (loading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <Helmet>
          <title>{searchTerm} | Instagram</title>
        </Helmet>
        <UserSection>
          {data.searchUser.length === 0 ? (
            <FatText text={"No Users Found"} />
          ) : (
            data.searchUser.map((user) => (
              <UserCard
                id={user.id}
                username={user.username}
                amIFollowing={user.amIFollowing}
                url={user.avatar}
                isMyself={user.isMyself}
              />
            ))
          )}
        </UserSection>
        <PostSection>
          {data.searchPost.length === 0 ? (
            <FatText text="No Posts Found" />
          ) : (
            data.searchPost.map((post) => (
              <PostCard
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
                id={post.id}
              />
            ))
          )}
        </PostSection>
      </Wrapper>
    );
  }
};

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
};

export default SearchPresenter;
