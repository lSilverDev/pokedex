<template>
  <PokedexMenu/>
  <main style="display: flex; flex-direction: row;">
    <div>
      <PokeSidebar @pokemonSelected="pokemonCatchInfo"/>
    </div>
    <div>
      <PokemonCard/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokeSidebar from "@/components/PokeSidebar/PokeSidebar.vue";
import PokedexMenu from "@/components/PokedexMenu/PokedexMenu.vue";
import PokemonCard from "@/components/PokemonCard/PokemonCard.vue";
import axios from "axios";

const pokemon_info: any = [];

export default defineComponent({
  name: "App",
  emits:['infoCatched'],
  props: {
    pokemon : {
        type: String,
        default: null
    }
  },
  data(){
    return{
      pokemon_info,
    }
  },
  components: {
    PokeSidebar,
    PokedexMenu,
    PokemonCard
  },
  methods: {
    pokemonCatchInfo(pokemon: string) {
        axios
        .get(pokemon)
        .then((res) => {
            this.pokemon_info = res.data;
            this.$emit('infoCatched', pokemon_info);
        }).catch((error) => {
            console.log(error);
        });
    },
  }
});
</script>

<style>
@import "./assets/styles/style.css";
</style>
