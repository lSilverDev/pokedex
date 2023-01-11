<template>
  <div class="card">
    <div>
      <!-- nome e id -->
      {{ storage.pokemon_name }}
    </div>
    <div>
      <!-- Foto -->
    </div>
    <div>
      <!-- descriçao 
      abilidades
      genero 
      height
      weight
      categoria
      type
      weaknesses
      stats -->
      {{ storage.pokemon_info }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import importStorage from '@/storage/storage.ts';

export default defineComponent({
    name: "pokecard",
    setup(){
    let storage = ref(importStorage);
    return {
      storage,
    }
  },
})
</script>

<style>
@import "./style.scss";
</style>
