import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePokeApi } from "../../contexts/PokeAPI";
import EvolutionNode from "./EvolutionNode";

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
  let evolvesFrom = null;
  while (currentEvolution.species.name !== pokemon.species.name) {
    evolvesFrom = currentEvolution;
    currentEvolution = currentEvolution.evolves_to[0];
  }

  return (
    <Wrapper {...props}>
      {evolvesFrom && (
        <EvolutionList>
          <h3>Evolves From</h3>
          <Node
            evolution={evolvesFrom}
            onClick={() => onSelect(evolvesFrom.species.name)}
          />
        </EvolutionList>
      )}
      {currentEvolution.evolves_to.length > 0 && (
        <EvolutionList>
          <h3>Evolves Into</h3>
          {currentEvolution.evolves_to.map(e => (
            <Node
              key={e.species.name}
              evolution={e}
              onClick={() => onSelect(e.species.name)}
            />
          ))}
        </EvolutionList>
      )}
    </Wrapper>
  );
};

export default EvolutionChain;
