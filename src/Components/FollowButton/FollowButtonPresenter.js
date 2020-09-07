import React from "react";
import Button from "../Button";
import styled from "styled-components";

const FollowButton = styled(Button)`
  width: 100px;
`;

const FollowButtonPresenter = ({ amIFollowing, onClick }) => (
  <FollowButton text={amIFollowing ? "Unfollow" : "Follow"} onClick={onClick} />
);

export default FollowButtonPresenter;
