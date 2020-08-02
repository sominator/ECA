<template>
    <div id="struct-app">
        <div id="game">
            <Game />
        </div>
        <div id="border" />
        <div id="input">
            <Struct />
        </div>
    </div>
</template>

<script>
    import Struct from './Struct.vue';
    import Game from './Game.vue';

    export default {
        name: 'StructApp',
        components: {
            Struct,
            Game
        }
    }
</script>

<style scoped>
    #struct-app {
        font-family: 'Trebuchet MS';
        text-align: left;
        background-color: black;
        color: cyan;
        display: flex;
    }
    #game {
        width: 50vw;
        height: 100vh;
    }
    #input {
        width: 50vw;
        height: 100vh;
    }
    #border {
        border-right: 2px solid cyan;
    }
    @media (max-width: 1000px) {
        #app {
            flex-direction: column;
        }
        #game {
            width: 100vw;
            height: 50vh;
        }
        #input {
            width: 100vw;
            height: 50vh;
        }
    }
</style>
