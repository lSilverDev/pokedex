<template>
  <button @click="getPokemons()">
    <i class="material-symbols-outlined">fiber_manual_record</i>
  </button>
  <ul class="pokedex__poke-list" v-for="(pokemon, index) in pokemons" :key="index">
      <li class="pokemon__li" @click="selected(pokemon)">
        {{ pokemon.name }}
      </li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

const pokemons = [];

export default defineComponent({
  name: "PokeList",
  components: {},
  emits: ["pokemonSelected"],
  data() {
    return {
      pokemons,
    };
  },
  methods: {
    getPokemons() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
        .then((res) => {
          res.data.results.forEach((element) => {
            this.pokemons.push(element);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selected(pokemon){
      this.$emit("pokemonSelected", pokemon.url);
    }
  },
});
</script>


<style>
@import './style.scss';
</style>
