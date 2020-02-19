<template>
    <div id="home">
        <h1>Entromancy Companion App</h1>
        <div class="div-button" v-on:click="displayToggle = 'lore'" v-bind:class="{selected: displayToggle==='lore'}">
            <p>Lore</p>
        </div>
        <div class="div-button" v-on:click="displayToggle = 'characters'" v-bind:class="{selected: displayToggle==='characters'}">
            <p>Character Generator</p>
        </div>
        <Lore v-show ="displayToggle === 'lore'"/>
        <Characters v-show ="displayToggle === 'characters'" />
    </div>
</template>

<script>
    import Lore from "./Lore.vue";
    import Characters from "./Characters.vue";
    export default {
        name: 'Home',
        components: {
            Lore,
            Characters
        },
        data: function () {
            return {
                displayToggle: ""
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .div-button {
        display: inline-block;
        background: cyan;
        color: black;
        width: 300px;
        height: 30px;
        margin: auto;
        margin-left: 10px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        line-height: 5px;
        border-radius: 10px;
    }
    .div-button:hover{
        background: hotpink;
        cursor: pointer;
    }
    .selected {
        background: hotpink;
    }
</style>

