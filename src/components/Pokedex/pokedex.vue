<template>
    <div class="pokedex">
        <div class="pokedex__menu">
            <div class="pokedex__menu-icon-container">
                <i class="material-symbols-outlined">menu</i>
            </div>
            <div class="pokedex__input">
                <input type="text">
            </div>
        </div>
        <div>
            <aside class="pokedex__sidebar">
                <PokeList/>
            </aside>

            <section class="pokedex__pokemon-info">
                <PokeCard/>
            </section>
        </div>
        <div class="pokedes__footer">
            <div class="pokedes__footer-container-test">
                <p>Made by llSilverDev</p>
            </div>
        </div>
    </div>
        

</template>

<script>
import { defineComponent, ref } from "vue";
import PokeList from "../Pokelist/pokeList.vue";
import PokeCard from "../Pokecard/pokeCard.vue";
import importStorage from '@/storage/storage.ts';
import axios from "axios";

export default defineComponent({
    name: "pokedex",
    components:{
        PokeList,
        PokeCard
    },
    setup(){
        let storage = ref(importStorage);
        return {
            storage,
        }
    }
})
</script>

<style>
@import './style.scss';
</style>