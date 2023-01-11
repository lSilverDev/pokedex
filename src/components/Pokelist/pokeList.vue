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
import { defineComponent, ref } from "vue";
import axios from "axios";
import importStorage from '@/storage/storage.ts'

const pokemons = [];

export default defineComponent({
  name: "PokeList",
  components: {},
  setup(){
    let storage = ref(importStorage);
    return {
      storage,
    }
  },
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
    pokemonCatchInfo() {
        axios
        .get(this.storage.pokemon_url)
        .then((res) => {
            this.storage.pokemon_info = res.data;
        }).catch((error) => {
            console.log(error);
        });
    },
    selected(pokemon){
      this.storage.pokemon_name = pokemon.name;
      this.storage.pokemon_url = pokemon.url;
      this.pokemonCatchInfo();
    }
  },
});
</script>


<style>
@import './style.css';
</style>
