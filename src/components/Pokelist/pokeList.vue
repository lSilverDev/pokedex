<template>
  <button @click="getPokemons()">
    <i class="material-symbols-outlined">fiber_manual_record</i>
  </button>
  <ul class="pokedex__poke-list" v-for="(pokemon, index) in pokemons" :key="index">
      <li class="pokemon__li" @click="selected(pokemon)">
        {{ pokemon.name }}
          <div class="mini__pokebola-container">
              <div class="mini-pokebola"></div>
          </div>
      </li>
  </ul>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

const pokemons = [];

export default defineComponent({
  name: "PokeList",
  components: {},
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
    // pokemonCatchInfo() {
    //     axios
    //     .get(this.storage.pokemon_url)
    //     .then((res) => {
    //         this.storage.pokemon_info = res.data;
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // },
    selected(pokemon){
      
    }
  },
});
</script>


<style>
@import './style.css';
</style>
