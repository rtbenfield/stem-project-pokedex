import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePokeApi } from "../../contexts/PokeAPI";
import EvolutionNode from "./EvolutionNode2";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const EvolutionList = styled.div`
  flex: 1;
`;

const Node = styled(EvolutionNode)`
  cursor: pointer;
`;

const EvolutionChain = ({ onSelect, pokemon, ...props }) => {
  const P = usePokeApi();
  const [evolutionChain, setEvolutionChain] = useState(null);

  useEffect(() => {
    P.resource(pokemon.species.url)
      .then(p => P.resource(p.evolution_chain.url))
      .then(p => P.getEvolutionChainById(p.id))
      .then(p => setEvolutionChain(p));
  }, [P, pokemon.species.url]);

  if (!evolutionChain) {
    return null;
  }

  let currentEvolution = evolutionChain.chain;
  let evolvesFrom = evolutionChain.chain;
  while (currentEvolution.species.name !== pokemon.species.name) {
    evolvesFrom = currentEvolution;
    currentEvolution = currentEvolution.evolves_to[0];
  }
  console.log(evolutionChain);

  return (
    <Wrapper {...props}>
      <EvolutionNode evolution={evolutionChain.chain} />
    </Wrapper>
  );
};

export default EvolutionChain;
