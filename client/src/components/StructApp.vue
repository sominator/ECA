<template>
    <div id="struct-app">
        <div id="game">
            <Game />
        </div>
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
        width: 80vw;
        height: 90vh;
    }
    #input {
        width: 20vw;
        height: 90vh;
        border-left: 2px solid cyan;
    }
    @media (max-width: 1000px) {
        #struct-app {
            flex-direction: column;
        }
        #game {
            width: 100vw;
            height: 80vh;
        }
        #input {
            width: 100vw;
            height: 20vh;
        }
    }
</style>
