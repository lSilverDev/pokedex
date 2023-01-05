<template>
  <select>
    <option v-for="(pokemon, index) in pokemons" :key="index">
      {{ pokemon.name }}
    </option>
  </select>
</template>

<script></script>

<style></style>
