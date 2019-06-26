import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePokeApi } from "../../contexts/PokeAPI";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  text-transform: capitalize;
`;

const EvolutionNode = ({ evolution, ...props }) => {
  const P = usePokeApi();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    P.getPokemonByName(evolution.species.name).then(setPokemon);
  }, [P, evolution]);

  if (!pokemon) {
    return null;
  }

  return (
    <Wrapper {...props}>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      <Name>{pokemon.name}</Name>
    </Wrapper>
  );
};

export default EvolutionNode;
