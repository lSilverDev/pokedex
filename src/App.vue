<template>
  <pokeList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pokeList from "./components/pokeList.vue";

export default defineComponent({
  name: "App",
  components: {
    pokeList,
  },
});
</script>

<style scoped></style>
