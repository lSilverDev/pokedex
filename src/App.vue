<template>
  <div>
    <PokedexMenu/>
    <PokeSidebar @pokemonSelected="pokemonCatchInfo"/>
  </div>
    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokeSidebar from "@/components/PokeSidebar/PokeSidebar.vue";
import PokedexMenu from "@/components/PokedexMenu/PokedexMenu.vue";
import axios from "axios";

const pokemon_info: any = [];

export default defineComponent({
  name: "App",
  emits:['infoCatched'],
  props: {
    pokemon : {
        type: Object,
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
  },
  methods: {
    pokemonCatchInfo(pokemon: Object) {
      console.log(pokemon);
        axios
        .get(pokemon.url)
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
