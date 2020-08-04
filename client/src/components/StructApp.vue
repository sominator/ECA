<template>
    <div id="struct-app">
        <div id="game">

        </div>
        <div id="chat">
            <Struct />
        </div>
    </div>
</template>

<script>
    import Struct from './Struct.vue';

    export default {
        name: 'StructApp',
        components: {
            Struct
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
        width: 60vw;
        height: 80vh;
        margin-left: 8vw;
        border: 2px solid cyan;
    }
    #chat {
        width: 30vw;
        height: 80vh;
        border: 2px solid hotpink;
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
