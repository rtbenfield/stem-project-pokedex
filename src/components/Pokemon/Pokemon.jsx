import React, { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { usePokeApi } from "../../contexts/PokeAPI";
import Attributes from "./Attributes";
import EvolutionChain from "./EvolutionChain2";
import Stats from "./Stats";
import TypeList from "./TypeList";

const Wrapper = styled.div`
  padding: 0 2.5rem;
`;

const Image = styled.img`
  display: block;
  height: 250px;
  margin-bottom: -50px;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
`;

const InfoContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 40px 10px 25px 10px;
  justify-items: center;
  align-items: center;
`;

const Name = styled.h1`
  font-size: 1.5em;
  text-transform: capitalize;
`;

const Description = styled.blockquote`
  padding: 0.5em;
  text-align: center;
`;

function getTypeGradient(types) {
  if (types.length === 2) {
    return `linear-gradient(141deg, rgb(169, 143, 243) 0%, rgb(238, 129, 48) 76%)`;
  } else {
    return types[0];
  }
}

const Pokemon = ({ name, onSelect }) => {
  const P = usePokeApi();
  const [pokemon, setPokemon] = useState(null);
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    P.getPokemonByName(name).then(setPokemon);
    P.getPokemonSpeciesByName(name).then(setSpecies);
  }, [P, name]);

  if (!pokemon || !species) {
    return null;
  }
  console.log(pokemon.types);

  const { flavor_text: description } = species.flavor_text_entries.find(
    x => x.language.name === "en"
  );

  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(141deg, rgb(169, 143, 243) 0%, rgb(238, 129, 48) 76%)`
      }}
    >
      <Image alt={pokemon.name} src={pokemon.sprites.front_default} />
      <InfoContainer>
        <Name>{pokemon.name}</Name>
        <TypeList pokemon={pokemon} />
        <Attributes pokemon={pokemon} />
        <Description>{description}</Description>
        <Stats pokemon={pokemon} />
        <EvolutionChain onSelect={onSelect} pokemon={pokemon} />
      </InfoContainer>
    </Wrapper>
  );
};

Pokemon.propTypes = {
  onBack: PropTypes.func
  // variant: PropTypes.oneOf("mini", "full").isRequired
};

export default Pokemon;
