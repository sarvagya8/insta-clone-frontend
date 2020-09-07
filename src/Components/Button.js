import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  border: none;
  background-color: ${(props) => props.theme.blueColor};
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Button = ({ text, onClick }) => (
  <Container onClick={onClick}>{text}</Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
