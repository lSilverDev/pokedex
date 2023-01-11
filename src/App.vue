<template>
  <Pokedex />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pokedex from "./components/Pokedex/pokedex.vue";

export default defineComponent({
  name: "App",
  components: {
    Pokedex,
  },
});
</script>

<style>
@import "./assets/styles/style.css";
</style>
