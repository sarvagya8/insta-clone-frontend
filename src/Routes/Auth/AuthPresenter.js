import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const Wrapper = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const Form = styled(Box)`
  padding: 40px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
    button {
      margin-top: 12px;
    }
  }
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
  font-size: 12px;
  margin-bottom: 100px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const AuthPresenter = ({
  action,
  username,
  firstName,
  lastName,
  email,
  setAction,
  secret,
  onSubmit,
}) => {
  return (
    <Wrapper>
      <Form>
        {action === "logIn" && (
          <>
            <Helmet>
              <title>Log In | Instagram</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input placeholder={"Email"} {...email} type="email" />{" "}
              <Button text={"Log In"} />
            </form>
          </>
        )}
        {action === "signUp" && (
          <>
            <Helmet>
              <title>Sign Up | Instagram</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input placeholder={"First name"} {...firstName} />
              <Input placeholder={"Last name"} {...lastName} />
              <Input placeholder={"Email"} type="email" {...email} />
              <Input placeholder={"Username"} {...username} />
              <Button text={"Sign up"} />
            </form>
          </>
        )}
        {action === "confirm" && (
          <>
            <Helmet>
              <title>Confirm Secret | Instagram</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input placeholder="Paste your login secret." {...secret} />
              <Button text={"Log in"} />
            </form>
          </>
        )}
      </Form>
      {action === "signUp" && (
        <StateChanger>
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>
          </>
        </StateChanger>
      )}
      {action === "logIn" && (
        <StateChanger>
          <>
            Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        </StateChanger>
      )}
      {action === "confirm" && (
        <StateChanger>
          <>Almost there! </>
        </StateChanger>
      )}
    </Wrapper>
  );
};

export default AuthPresenter;
