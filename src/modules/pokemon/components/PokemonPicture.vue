<template>
    <section>
        <img v-if="!showPokemon" :src="pokemonImage" class="brightness-0 h-[200px]" />
        <img v-else :src="pokemonImage" class="fade-in h-[200px]" />
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Se definene las props para recibir el valor desde el componente padre.
interface Props {
    pokemonId: number;
    showPokemon?: boolean;
}

// En el caso que la prpiedad es no obligatoria, es posible mandar un valor por defecto 
// en la propiedad que lo requiera, con: withDefaults y estableciendo la propiedad con su valor por defecto.
const props = withDefaults(defineProps<Props>(), {
    showPokemon: false,
});

const pokemonImage = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`);
</script>

<style scoped>
img {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
</style>