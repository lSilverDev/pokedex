<template>
      <aside  :class="`${is_expanded ? 'is-expanded' : ''}`">
        <div class="menu-toggle-wrap">
          <button class="menu-toggle" @click="ToggleMenu">
            <span class="material-icons">
              keyboard_double_arrow_right
            </span>
          </button>
        </div>

        <button v-if="is_expanded" @click="getPokemons()">
          <i class="material-symbols-outlined">fiber_manual_record</i>
        </button>
        <ul v-if="is_expanded" class="pokedex__poke-list" v-for="(pokemon, index) in pokemons" :key="index">
          <li class="pokemon__li" @click="selected(pokemon)">
            <button>{{ pokemon.name }}</button>
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
