import { computed, onMounted, ref } from 'vue';
import { GameStatus, type PokemonListResponse, type Pokemon } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  // Para los efectos de implementar el loading al realizar la petición.
  const pokemons = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  // Solo cuando la longitud del arreglo que se llena con la petición al Api aun es 0, quiere decir que se esta cargando aún.
  const isLoading = computed(() => pokemons.value.length === 0);
  const randomPokemon = computed(() => {
    return pokemonOptions.value[Math.floor(Math.random() * pokemonOptions.value.length)];
  });

  // Petición al Api de pokemon, para el llenado del arreglo.
  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');
    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      //const id = urlParts[urlParts.length - 2];
      // Esta línea comentada anterior, es una forma tradicional de obtener una parte de la cadena,
      // con la nueva funcionalidad de javascript se puede realizar con 'at'
      const id = urlParts.at(-2) ?? 0;

      return {
        // con el '+', se hace un ast para que siempre sea númerico el 'id'
        id: +id,
        name: pokemon.name,
      };
    });

    // Se retorna la promesa: Promise<Pokemon[]> y de manera aleatoria para efectos de la funcionalidad del juego.
    return pokemonsArray.sort(() => Math.random() - 0.5);
  };

  // Para ir cortando el arreglo e ir tomando de 4 en cuatro pokemons de la solicitud.
  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    // Se corta el arreglo a 4 elementos
    pokemonOptions.value = pokemons.value.slice(0, howMany);

    // Se eliminan los 4 elementos del arreglo principal.
    pokemons.value = pokemons.value.slice(howMany);
  };

  // Se verifica el estado del juego si gano o perdio.
  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;

    if (hasWon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 500,
        spread: 170,
        origin: { y: 0.6 },
      });
      return;
    }
    gameStatus.value = GameStatus.Lost;
  };

  // En el ciclo de vida del componente al montarse se ejecutan estas acciones.
  onMounted(async () => {
    // Se envía un delay de 1 segundo antes de responder para hacer visible el loading.
    //await new Promise((resolve) => setTimeout(resolve, 1000));

    pokemons.value = await getPokemons();
    // se invoca el método para ir obteniedo las proximas opciones de 4 en 4, y acortando
    // el arreglo principal para evitar repeticiones.
    getNextRound();
    console.log({ pokemons });
    console.log('Mounted');
    console.log(pokemonOptions.value);
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,
    checkAnswer,
    // Métodos a retornar.
    getNextRound,
  };
};
