import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { usePokeApi } from "../../contexts/PokeAPI";
import Result from "./Result";

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    "search"
    "results";
  grid-template-rows: min-content 1fr;
  justify-items: center;
`;

const SearchWrapper = styled.form`
  background: #cc0000;
  display: flex;
  grid-area: search;
  justify-content: center;
  padding: 20px;
  width: 100%;

  input {
    border: none;
    background-image: none;
    background-color: #fff;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    box-shadow: none;
    padding: 5px;
  }

  button {
    border: none;
    background-image: none;
    background-color: #ededed;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: none;
    cursor: pointer;
  }
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-area: results;
  justify-content: space-around;
  overflow-y: auto;
`;

const Search = ({ onSelection }) => {
  const P = usePokeApi();
  const [allPokemon, setAllPokemon] = useState([]);
  const [query, setQuery] = useState("");
  const [lastSearch, setLastSearch] = useState("charizard");

  useEffect(() => {
    P.getPokemonSpeciesList({
      limit: 99999
    }).then(pokemon => setAllPokemon(pokemon.results));
  }, [P]);

  const results = useMemo(() => {
    if (!lastSearch) {
      return [];
    }
    return allPokemon.filter(p => p.name.includes(lastSearch));
  }, [allPokemon, lastSearch]);

  function handleSubmit(e) {
    e.preventDefault();
    setLastSearch(query.toLocaleLowerCase());
  }

  return (
    <Wrapper>
      <SearchWrapper onSubmit={handleSubmit}>
        <input
          onChange={e => setQuery(e.target.value)}
          type="text"
          value={query}
        />
        <button type="submit">Search</button>
      </SearchWrapper>
      <ResultsWrapper>
        {results.map(r => (
          <Result
            key={r.url}
            onClick={() => onSelection(r.name)}
            onKeyPress={e => e.key === "Enter" && onSelection(r)}
            pokemon={r}
            role="button"
            tabIndex={0}
          />
        ))}
      </ResultsWrapper>
    </Wrapper>
  );
};

export default Search;
