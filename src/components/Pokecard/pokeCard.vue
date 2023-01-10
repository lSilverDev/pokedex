<template>
  <div class="card">
    <div>
      {{ pokemon }}
    </div>
    <div>
      
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "pokecard",
    props: { pokemon: { type: String, requered: true, } },
})
</script>

<style>
@import "./style.scss";
</style>
