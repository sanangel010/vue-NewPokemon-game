<template>
    <section v-if="isLoading || randomPokemon.id === null"
        class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="text-3xl">Espere por favor</h1>
        <h3 class="animate-pulse">Cargando Pokémons</h3>
    </section>

    <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
        <h1 class="m-5">¿ Quién es este Pokémon ?</h1>
        <div class="h-20">
            <button v-if="gameStatus !== GameStatus.Playing" @click="getNextRound(4)">Reiniciar el juego</button>
        </div>

        <!-- Pokemon picture -->
        <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus !== GameStatus.Playing" />

        <!-- Pokemon options -->
        <PokemonOptions :options="options" :block-selection="gameStatus !== GameStatus.Playing"
            :correct-answer="randomPokemon.id" @selected-option="checkAnswer" />
    </section>

</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

// con esto: pokemonOptions:options se hace un alias.
const { gameStatus, isLoading, pokemonOptions: options, getNextRound, randomPokemon, checkAnswer } = usePokemonGame();

const onSelectedOption = (value: number) => {
    console.log({ value });
};

</script>

<style scoped>
button {
    @apply bg-green-200 shadow-md rounded-lg p-3 m-3 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}
</style>
