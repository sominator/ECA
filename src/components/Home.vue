<template>
    <div class="home">
        <h1>Entromancy Companion App</h1>
        <div id="lore" class="div-button" v-on:click="displayToggle = 'lore'">
            <p>Lore</p>
        </div>
        <div id="chargen" class="div-button" v-on:click="displayToggle = 'chargen'">
            <p>Character Generator</p>
        </div>
        <Lore v-show ="displayToggle === 'lore'"/>
        <CharGen v-show ="displayToggle === 'chargen'" />
    </div>
</template>

<script>
    import Lore from "./Lore.vue";
    import CharGen from "./CharGen.vue";
    export default {
        name: 'Home',
        components: {
            Lore,
            CharGen
        },
        props: {
            
        },
        data: function () {
            return {
                displayToggle: "lore"
            }
        },
        methods: {

        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #home {
        display: flex;
        flex-direction: column;

    }
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
</style>

