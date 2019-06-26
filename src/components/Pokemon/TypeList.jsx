import React from "react";
import styled from "styled-components";
import { getColorForType } from "../../utils/colors";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Type = styled.li`
  display: block;
  flex: 1 1 0;
  padding: 0.5rem 1rem;
  text-transform: capitalize;

  &:first-of-type {
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  &:last-of-type {
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

const TypeList = ({ pokemon }) => {
  return (
    <Wrapper>
      {pokemon.types.map(x => {
        const { primary, text } = getColorForType(x.type.name);
        return (
          <Type key={x.type.name} style={{ background: primary, color: text }}>
            {x.type.name}
          </Type>
        );
      })}
    </Wrapper>
  );
};

export default TypeList;
