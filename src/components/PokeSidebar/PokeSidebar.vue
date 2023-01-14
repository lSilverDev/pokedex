<template>
      <aside  :class="`${is_expanded ? 'is-expanded' : ''}`">
        <button @click="ToggleMenu">
          <i class="material-symbols-outlined">fiber_manual_record</i>
        </button>
        <ul v-if="is_expanded" class="pokedex__poke-list" v-for="(pokemon, index) in pokemons" :key="index">
          <li class="pokemon__li" @click="selected(pokemon)">
            <img style="width: 25px !important; height: 25px !important;" src="https://www.pngkit.com/png/full/312-3123953_pokeball-pokemon-ball-8-bit.png" alt="pokebola">
            <button class="pokemon__btn">{{ pokemon.name }}</button>
          </li>
        </ul>
      </aside>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

const pokemons = [];

export default defineComponent({
  name: "PokeSidebar",
  components: {
  },
  data() {
    let is_expanded: Boolean = localStorage.getItem("is_expanded") === "true";
    return { is_expanded, pokemons };
  },
  methods: {
    ToggleMenu() {
      this.is_expanded = !this.is_expanded;
      localStorage.setItem("is_expanded", new Boolean(this.is_expanded).toString());
      this.getPokemons();
    },
    getPokemons() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
        .then((res) => {
          res.data.results.forEach((element: any) => {
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
    selected(pokemon: Pokemon){
      
    }
  },
});
</script>

<style>
@import './style.css';
</style>







<!--
<script>
import { defineComponent } from "vue";
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
</style> -->
