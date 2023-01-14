<template>
    <PokedexMenu/>
    <PokeSidebar/>
    <PokemonCard/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokeSidebar from "@/components/PokeSidebar/PokeSidebar.vue";
import PokedexMenu from "@/components/PokedexMenu/PokedexMenu.vue";
import PokemonCard from "@/components/PokemonCard/PokemonCard.vue";

export default defineComponent({
  name: "App",
  components: {
    PokeSidebar,
    PokedexMenu,
    PokemonCard
  },
});
</script>

<style>
@import "./assets/styles/style.css";
</style>
