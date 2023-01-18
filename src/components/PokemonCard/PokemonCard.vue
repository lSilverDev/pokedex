<template>
    <div class="pokemonCard" style="border: 1px solid black; padding: 10px; margin: 10px;">
        <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <div>
                <img src="https://img.pokemondb.net/artwork/avif/bulbasaur.avif" alt="">
            </div>
            <div>
                <ul>
                    <li>National N: </li>
                    <li>Type: </li>
                    <li>Species: </li>
                    <li>Height:</li>
                    <li>Weight:</li>
                    <li>Abilities:</li>
                    <li>Local N:</li>
                </ul>
            </div>  
        </div>
        <div style="text-align: center;">
            BASE STATS
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
    name: "PokemonCard",
    computed: {

    },
})
</script>

<style>
@import './style.css';
</style>