import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePokeApi } from "../../contexts/PokeAPI";

const Wrapper = styled.div`
  border-radius: 10%;
  cursor: pointer;
  display: grid;
  grid-gap: 5%;
  grid-template-areas:
    "image"
    "name";
  justify-items: center;
  padding: 5%;
  width: 150px;

  &:focus,
  &:hover {
    background-color: rgba(204, 0, 0, 0.25);
    outline: none;
  }
`;

const Image = styled.img`
  background-color: #fff;
  border-radius: 50%;
  grid-area: image;
`;

const Name = styled.h2`
  grid-area: name;
  text-transform: capitalize;
`;

const Result = ({ pokemon, ...props }) => {
  const P = usePokeApi();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    P.getPokemonByName(pokemon.name).then(details => setDetails(details));
  }, [P, pokemon]);

  if (!details) {
    return (
      <Wrapper {...props}>
        <Name>{pokemon.name}</Name>
      </Wrapper>
    );
  }

  return (
    <Wrapper {...props}>
      <Name>{pokemon.name}</Name>
      {details.sprites.front_default && (
        <Image alt={pokemon.name} src={details.sprites.front_default} />
      )}
    </Wrapper>
  );
};

export default Result;
