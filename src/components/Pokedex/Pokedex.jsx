import React, { useState } from "react";
import Modal from "../Modal";
import Pokemon from "../Pokemon";
import Search from "../Search";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState("charizard");
  const [modalOpen, setModalOpen] = useState(true);

  function handleSelection(pokemon) {
    setPokemon(pokemon);
    setModalOpen(true);
  }

  return (
    <>
      <Search onSelection={handleSelection} />
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        {pokemon && <Pokemon name={pokemon} onSelect={setPokemon} />}
      </Modal>
    </>
  );
};

export default Pokedex;
