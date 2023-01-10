<template>
  <Pokedex />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pokedex from "./components/pokedex.vue";

export default defineComponent({
  name: "App",
  components: {
    Pokedex,
  },
});
</script>

<style scoped></style>
