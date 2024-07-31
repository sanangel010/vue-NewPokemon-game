<template>
    <section class="mt-5 flex flex-col">
        <button v-for="{ name, id } in options" :key="id" @click="$emit('selectedOption', id)" :class="[
            'capitalize disabled:shadow-none disabled:bg-gray-100',
            {
                correct: id === correctAnswer && blockSelection,
                incorrect: id !== correctAnswer && blockSelection,
            },
        ]" :disabled="blockSelection">
            {{ name }}
        </button>
    </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
    options: Pokemon[]; // arreglo con las 4 opciones seleccionadas, del tipo dela interfaz de Pokemon.
    blockSelection: boolean;
    correctAnswer: number;
}

// Se definene las props para recibir el valor desde el componente padre.
defineProps<Props>();


// Se define la propiedad que se va a emitir ahora del hijo al padre: (PokemonGame.vue)
defineEmits<{
    selectedOption: [id: number];// con esta propiedad definida para emitir el valor cliqueado.
}>();
</script>

<style scoped>
button {
    @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}

.correct {
    @apply bg-blue-500 text-white;
}

.incorrect {
    @apply bg-red-400 opacity-80;
}
</style>