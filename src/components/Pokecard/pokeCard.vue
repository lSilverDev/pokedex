<template>
  <div class="card">
    <div>
      {{ storage.pokemon_name }}
    </div>
    <div>
      
    </div>
    <div>
      
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
