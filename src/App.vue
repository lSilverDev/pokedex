<template>
  <div>
    <PokedexMenu/>
    <PokeSidebar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokeSidebar from "@/components/PokeSidebar/PokeSidebar.vue";
import PokedexMenu from "@/components/PokedexMenu/PokedexMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    PokeSidebar,
    PokedexMenu
  },
});
</script>

<style>
@import "./assets/styles/style.css";
</style>
