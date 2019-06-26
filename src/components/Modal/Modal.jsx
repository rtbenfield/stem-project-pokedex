import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const Header = styled.div`
  background-color: #ededed;
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  height: 2.5rem;

  button {
    background-color: #ededed;
    border: none;
    background-image: none;
    border-top-right-radius: 2.5rem;
    box-shadow: none;
    cursor: pointer;
    float: right;
    flex: 1;
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 5rem;

    &:hover {
      background-color: #c5c5c5;
    }
  }
`;

const Body = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Footer = styled.div`
  border-bottom-left-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  display: flex;
  flex-direction: row;

  button {
    background-color: #e1e1e1;
    border: none;
    background-image: none;
    box-shadow: none;
    cursor: pointer;
    flex: 1;
    font-size: 1.5rem;
    padding: 0.5rem;

    &:first-of-type {
      border-bottom-left-radius: 2.5rem;
    }

    &:last-of-type {
      border-bottom-right-radius: 2.5rem;
    }

    &:hover {
      background-color: #e1e1e1;
    }
  }
`;

const Wrapper = styled(Modal)`
  background-color: #fff;
  border-radius: 2.5rem;
  bottom: 2rem;
  box-shadow: 2px 2px 10px 0px #8e8e8e;
  display: flex;
  flex-direction: column;
  left: 2rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
`;

const CustomModal = ({ children, onRequestClose, ...props }) => {
  return (
    <Wrapper
      onRequestClose={onRequestClose}
      shouldFocusAfterRender={false}
      {...props}
    >
      <Header>
        <button onClick={onRequestClose} type="button">
          X
        </button>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <button onClick={onRequestClose} type="button">
          Close
        </button>
      </Footer>
    </Wrapper>
  );
};

export default CustomModal;
