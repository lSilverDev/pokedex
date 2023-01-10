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
                <PokeList @pokemonSelected="pokemonCatch"/>
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
import { defineComponent } from "vue";
import PokeList from "../Pokelist/pokeList.vue";
import PokeCard from "../Pokecard/pokeCard.vue";
import axios from "axios";

export default defineComponent({
    name: "pokedex",
    emits: ["information_catched"],
    components:{
        PokeList,
        PokeCard
    },
    props: { pokemon: { type: String, requered: true, } },
    methods: {
        pokemonCatch(pokemon) {
            axios
            .get(pokemon)
            .then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            });
        },
    },
})
</script>

<style>
@import './style.scss';
</style>