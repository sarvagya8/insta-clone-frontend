import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { Helmet } from "react-helmet";
import Post from "./PostContainer";
import Loader from "../Loader";

const GET_POST = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
`;

const FullPost = ({
  match: {
    params: { id },
  },
}) => {
  const { data, loading } = useQuery(GET_POST, {
    variables: { id },
  });
  if (loading) {
    return (
      <Wrapper>
        <Helmet>
          <title>Post | Instagram</title>
        </Helmet>
        <Loader />
      </Wrapper>
    );
  } else {
    const {
      seeFullPost: {
        user,
        location,
        caption,
        files,
        likeCount,
        isLiked,
        comments,
        createdAt,
      },
    } = data;
    return (
      <Wrapper>
        <Helmet>
          <title>Post | Instagram</title>
        </Helmet>
        <Post
          id={id}
          user={user}
          files={files}
          location={location}
          caption={caption}
          likeCount={likeCount}
          isLiked={isLiked}
          comments={comments}
          createdAt={createdAt}
        />
      </Wrapper>
    );
  }
};

export default FullPost;
