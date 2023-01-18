<template>
    <div class="pokemonCard">
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <div>
                <img src="" alt="">
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
        <div>
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