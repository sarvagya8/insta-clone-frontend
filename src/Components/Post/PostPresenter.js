import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import Avatar from "../Avatar";
import FatText from "../FatText";
import { FullHeart, EmptyHeart, Comment as CommentIcon } from "../Icons";
import { Link } from "react-router-dom";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 45px;
  user-select: none;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

const Location = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const File = styled.img`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  background-image: url(${(props) => props.src}});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: 0.5s linear;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  resize: none;
  margin-top: 5px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Comments = styled.ul`
  margin-top: 8px;
`;

const Comment = styled.li`
  margin-bottom: 8px;
  span {
    margin-right: 5px;
  }
`;

const Meta = styled.div`
  padding: 15px;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Buttons = styled.div`
  ${Button} {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.4;
  display: block;
  font-size: 12px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 0.3px solid;
`;

const UserLink = styled(Link)`
  color: ${(props) => props.theme.blackColor};
`;

const Caption = styled.div`
  margin: 8px 0px;
  span {
    margin-right: 5px;
  }
`;

const PostPresenter = ({
  user: { username, avatar },
  caption,
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  comments,
  currentItem,
  toggleLike,
  onKeyPress,
  selfComments,
}) => (
  <Post>
    <Header>
      <UserLink to={`/users/${username}`}>
        <Avatar url={avatar} />
      </UserLink>
      <UserColumn>
        <UserLink to={`/users/${username}`}>
          <FatText text={username} />
        </UserLink>
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, index) => (
          <File key={file.id} src={file.url} showing={index === currentItem} />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <FullHeart /> : <EmptyHeart />}
        </Button>
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      <Caption>
        <UserLink to={`/users/${username}`}>
          <FatText text={username} />
        </UserLink>
        {caption}
      </Caption>
      {comments && (
        <Comments>
          {comments.map((comment) => (
            <Comment key={comment.id}>
              <UserLink to={`/users/${comment.user.username}`}>
                <FatText text={comment.user.username} />
              </UserLink>
              {comment.text}
            </Comment>
          ))}
          {selfComments.map((comment) => (
            <Comment key={comment.id}>
              <UserLink to={`/users/${comment.user.username}`}>
                <FatText text={comment.user.username} />
              </UserLink>{" "}
              {comment.text}
            </Comment>
          ))}
        </Comments>
      )}
      <Textarea
        placeholder={"Add a comment..."}
        value={newComment.value}
        onChange={newComment.onChange}
        onKeyPress={onKeyPress}
      />
      <Timestamp>{createdAt}</Timestamp>
    </Meta>
  </Post>
);

export default PostPresenter;
