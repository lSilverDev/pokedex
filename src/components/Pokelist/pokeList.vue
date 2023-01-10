<template>
  <button @click="getPokemons()">Turn On</button>
  <ul class="pokedex__poke-list" v-for="(pokemon, index) in pokemons" :key="index">
      <li>
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
  },
});
</script>
