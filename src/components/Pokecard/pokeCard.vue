<template>
  <div class="card">
    <div class="card__name">
      {{ storage.pokemon_name }}
    </div>
    <div class="card__img">
      
    </div>
    <div class="card__info">
      <div class="card__info-desc">
        Pokemon
      </div>
      <div class="card__info-hwtw">
        <p>Height: {{ storage.pokemon_info.height }}</p>
        <p>Weight: {{ storage.pokemon_info.weight }} </p>
        <p>Type: {{ storage.pokemon_info.type }}</p>
        <p>Weaknesses: {{ storage.pokemon_info.weaknesses }}</p>
        
      </div>
      <div class="card__info-ab">
        {{ storage.pokemon_info.abilities }}
      </div>
    </div>
    <!-- <div>
      descriçao 
      abilidades
      genero 
      height
      weight
      categoria
      type
      weaknesses
      stats
      {{ storage.pokemon_info }}
    </div> -->
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
@import "./style.css";
</style>
