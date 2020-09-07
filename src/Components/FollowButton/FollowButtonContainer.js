import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import FollowButtonPresenter from "./FollowButtonPresenter";

const FollowButtonContainer = ({ amIFollowing, id }) => {
  const [amIFollowingS, setAmIFollowing] = useState(amIFollowing);
  const [followMutation] = useMutation(FOLLOW, { variables: { id } });
  const [unfollowMutation] = useMutation(UNFOLLOW, { variables: { id } });

  const onClick = () => {
    if (amIFollowingS) {
      setAmIFollowing(false);
      unfollowMutation();
    } else {
      setAmIFollowing(true);
      followMutation();
    }
  };
  return (
    <FollowButtonPresenter onClick={onClick} amIFollowing={amIFollowingS} />
  );
};

FollowButtonContainer.propTypes = {
  amIFollowing: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default FollowButtonContainer;
