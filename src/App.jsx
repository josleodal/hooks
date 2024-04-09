import React from 'react';
import useCustomHook from './hooks/useFecthCharacters';

const App = () => {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokemonData = useCustomHook(urlPokemon);
  const rickData = useCustomHook(urlRick);

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {pokemonData && (
        <>
          <p>{pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt="Pokemon" />
        </>
      )}

      <h2>Personaje Rick and Morty</h2>
      {rickData && (
        <>
          <p>{rickData.name}</p>
          <img src={rickData.image} alt="Rick and Morty" />
        </>
      )}
    </div>
  );
};

export default App;
