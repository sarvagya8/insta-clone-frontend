import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import PostCard from "../../Components/PostCard";
import FollowButton from "../../Components/FollowButton/FollowButtonContainer";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 75vh;
  margin-bottom: 50px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const HeaderColumn = styled.div`
  &:first-child {
    margin-right: 100px;
  }
`;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  font-size: 26px;
  margin-right: 35px;
  font-weight: 300;
`;

const CountsRow = styled.ul`
  display: flex;
  margin: 25px 0px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
  word-wrap: break-word;
  width: 320px;
`;

const Posts = styled.div`
  border-top: ${(props) => props.theme.boxBorder};
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 310px);
  grid-template-rows: 310px;
  grid-auto-rows: 310px;
  grid-gap: 30px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`;

const ProfilePresenter = ({ loading, data, logOut }) => {
  if (loading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  } else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        username,
        posts,
        fullName,
        amIFollowing,
        isMyself,
        bio,
        followersCount,
        followingCount,
        postsCount,
      },
    } = data;
    return (
      <Wrapper>
        <Helmet>
          <title>{username} | Instagram</title>
        </Helmet>
        <Header>
          <HeaderColumn>
            <Avatar size={"lg"} url={avatar} />
          </HeaderColumn>
          <HeaderColumn>
            <UsernameRow>
              <Username>{username}</Username>
              {isMyself ? (
                <Button onClick={logOut} text={"Log Out"} />
              ) : (
                <FollowButton id={id} amIFollowing={amIFollowing} />
              )}
            </UsernameRow>
            <CountsRow>
              <Count>
                <FatText text={String(postsCount)} /> posts
              </Count>
              <Count>
                <FatText text={String(followersCount)} /> followers
              </Count>
              <Count>
                <FatText text={String(followingCount)} /> following
              </Count>
            </CountsRow>
            <FullName text={fullName} />
            <Bio>{bio}</Bio>
          </HeaderColumn>
        </Header>
        <Posts>
          {posts &&
            posts.map((item, idx, arr) => {
              let post = arr[arr.length - idx - 1];
              return (
                <PostCard
                  id={post.id}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                  file={post.files[0]}
                />
              );
            })}
        </Posts>
      </Wrapper>
    );
  }
};

export default ProfilePresenter;
