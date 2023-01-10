<template>
    <body>
        <header class="pokedex__menu">
            <div class="pokedex__menu-icon-container">
                <i class="material-symbols-outlined">menu</i>
            </div>
            <div class="pokedex__input">
                <input type="text">
            </div>
        </header>
        <main>
            <aside class="pokedex__sidebar">
                <PokeList/>
            </aside>

            <section class="pokedex__pokemon-info">
                <PokeCard/>
            </section>
        </main>
        <footer class="pokedes__footer">
            <div class="pokedes__footer-container-test">
                <p>Made by llSilverDev</p>
            </div>
        </footer>
    </body>
</template>

<script>
import { defineComponent } from "vue";
import PokeList from "./pokeList.vue";
import PokeCard from "./pokeCard.vue";

export default defineComponent({
    name: "pokedex",
    components:{
        PokeList,
        PokeCard
    }
})
</script>