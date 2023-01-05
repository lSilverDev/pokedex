<template>
  <div class="row">
    <div name="col">
      <button @click="getPokemons()">oi</button>
      <select>
        <option v-for="(pokemon, index) in pokemons" :key="index">
          {{ pokemon.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

const pokemons = [];

export default defineComponent({
  name: "PokeList",
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
