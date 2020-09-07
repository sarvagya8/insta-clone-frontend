import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import FollowButton from "./FollowButton/FollowButtonContainer";
import { Link } from "react-router-dom";

const Card = styled.div`
  display: flex;
  ${(props) => props.theme.whiteBox};
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: space-around;
`;

const ELink = styled(Link)`
  color: inherit;
`;

const UserCard = ({ url, username, isMyself, amIFollowing, id }) => {
  return (
    <Card>
      <ELink to={`/users/${username}`}>
        <Avatar url={url} size={"md"} />
      </ELink>
      <ELink to={`/users/${username}`}>
        <FatText text={username} />
      </ELink>
      {!isMyself && <FollowButton id={id} amIFollowing={amIFollowing} />}
    </Card>
  );
};

UserCard.propTypes = {
  url: PropTypes.string,
  username: PropTypes.string.isRequired,
  isMyself: PropTypes.bool.isRequired,
  amIFollowing: PropTypes.bool.isRequired,
};

export default UserCard;
