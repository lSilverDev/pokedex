<template>
      <aside  :class="`${is_expanded ? 'is-expanded' : ''}`">
        <button @click="ToggleMenu">
          <i class="material-symbols-outlined">fiber_manual_record</i>
        </button>
        <ul v-if="is_expanded" class="pokedex__poke-list" v-for="(pokemon, index) in pokemons" :key="index">
          <li class="pokemon__li">
            <img class="pokemon__btn_pokebola" src="https://www.pngkit.com/png/full/312-3123953_pokeball-pokemon-ball-8-bit.png" alt="pokebola">
            <button class="pokemon__btn" @click="pokemonSelected(pokemon)">{{ pokemon.name }}</button>
          </li>
        </ul>
      </aside>
</template>

<script lang="ts">
import type IPokemon from "@/interfaces/IPokemon";
import axios from "axios";
import { defineComponent } from "vue";

const pokemons = [] as Array<IPokemon>[];

export default defineComponent({
  name: "PokeSidebar",
  emits: ["pokemonSelected"],
  components: {
  },
  data() {
    let is_expanded: Boolean = localStorage.getItem("is_expanded") === "true";
    return { 
      is_expanded: false,
      pokemons
    };
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
          res.data.results.forEach((element) => {
            this.pokemons.push(element);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    pokemonSelected(pokemon: IPokemon){
      this.$emit('pokemonSelected', pokemon.url);
    },
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
