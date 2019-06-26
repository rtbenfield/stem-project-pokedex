import React from "react";
import styled from "styled-components";

const Attribute = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  justify-items: center;

  label {
    font-size: 0.75em;
  }
`;

const Wrapper = styled.div`
  background-color: #8e8e8e;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
`;

const Attributes = ({ pokemon }) => {
  return (
    <Wrapper>
      <Attribute>
        <span>{pokemon.weight / 10}kg</span>
        <label>Weight</label>
      </Attribute>
      <Attribute>
        <span>{pokemon.height / 10}m</span>
        <label>Height</label>
      </Attribute>
    </Wrapper>
  );
};

export default Attributes;
