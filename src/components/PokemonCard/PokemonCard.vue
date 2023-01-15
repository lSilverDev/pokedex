<template>
    <div class="pokemonCard">
        
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
    name: "PokemonCard",
    components:{
    },
    props: {
        pokemon : {
            type: Array<any>,
            default: null
        }
    },
    computed: {

    }
})
</script>

<style>
@import './style.css';
</style>