<template>
    <div class="pokedex">
        <div class="pokedex__menu">
            <div class="pokedex__menu-icon-container">
                <i class="material-symbols-outlined">menu</i>
            </div>
            <div class="pokedex__input">
                <input type="text">
            </div>
            <div class="pokedex__profile">
                <div class="pokedex__profile_img_Container">
                    <img src="https://gkpb.com.br/wp-content/uploads/2022/12/ash-pikachu-deixam-pokemon1-e1671196677262.jpg" alt="user"></img>
                </div>
            </div>
            <!-- <div class="pokedex__pokebola-container">
                <div class="pokedex_pokebola"></div>
            </div> -->
        </div>
        <!-- <div class="pokedex__main">

        </div>
        <div class="pokedex__footer">
            <div class="pokedex__footer-container-text">
                <p>Made by llSilverDev</p>
            </div>
        </div> -->
    </div>
        

</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
    name: "PokedexMenu",
    components:{
    }
})
</script>

<style>
@import './style.css';
</style>