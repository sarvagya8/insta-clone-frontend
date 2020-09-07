import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FullHeart, FullComment } from "./Icons";
import { Link } from "react-router-dom";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s linear;
  .fullComment {
    fill: white;
  }
`;

const Number = styled.div`
  color: white;
  display: flex;
  align-items: center;
  &:first-child {
    margin-right: 30px;
  }
`;

const NumberText = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

const Container = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

const PostCard = ({ likeCount, commentCount, file, id }) => (
  <Container bg={file.url}>
    <Link to={`/posts/${id}`}>
      <Overlay>
        <Number>
          <FullHeart />
          <NumberText>{likeCount}</NumberText>
        </Number>
        <Number>
          <FullComment />
          <NumberText>{commentCount}</NumberText>
        </Number>
      </Overlay>
    </Link>
  </Container>
);

PostCard.propTypes = {
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  file: PropTypes.object.isRequired,
};

export default PostCard;
