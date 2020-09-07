import React from "react";
import styled from "styled-components";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet";
import FatText from "../Components/FatText";
import PostCard from "../Components/PostCard";
import { FEED_QUERY } from "./Feed";
import { useQuery } from "react-apollo-hooks";

const Wrapper = styled.div`
  min-height: 85vh;
`;

const Posts = styled.div`
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
const Explore = () => {
  const { data, loading } = useQuery(FEED_QUERY);
  if (loading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  } else {
    return (
      <Wrapper>
        <Helmet>
          <title>Explore | Instagram</title>
        </Helmet>
        <Posts>
          {data.seeFeed.length === 0 ? (
            <FatText text="No Posts Found" />
          ) : (
            data.seeFeed.map((post) => (
              <PostCard
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                file={post.files[0]}
                id={post.id}
              />
            ))
          )}
        </Posts>
      </Wrapper>
    );
  }
};

export default Explore;
