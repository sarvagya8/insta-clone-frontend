import React from "react";
import styled from "styled-components";
import { useQuery, useMutation } from "react-apollo-hooks";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import { GET_USER, LOG_OUT } from "./ProfileQueries";
import ProfilePresenter from "./ProfilePresenter";

const ProfileContainer = ({
  match: {
    params: { username },
  },
}) => {
  const { data, loading } = useQuery(GET_USER, {
    variables: { username },
  });
  const [logOut] = useMutation(LOG_OUT);
  return <ProfilePresenter loading={loading} data={data} logOut={logOut} />;
};

export default ProfileContainer;
