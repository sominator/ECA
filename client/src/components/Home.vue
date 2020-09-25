<template>
    <div id="home">
        <h1>Entromancy Companion App <span>BETA</span></h1>
        <div id="sidebar">
            <div class="div-button" v-on:click="displayToggle = 'lore'" v-bind:class="{selected: displayToggle==='lore'}">
                <p>Lore</p>
            </div>
            <div class="div-button" v-on:click="displayToggle = 'characters'" v-bind:class="{selected: displayToggle==='characters'}">
                <p>Characters</p>
            </div>
            <div class="div-button" v-on:click="displayToggle = 'factions'" v-bind:class="{selected: displayToggle==='factions'}">
                <p>Factions</p>
            </div>
            <div class="div-button" v-on:click="displayToggle = 'struct'" v-bind:class="{selected: displayToggle==='struct'}">
                <p>Struct</p>
            </div>
        </div>
        <Lore v-show="displayToggle === 'lore'" />
        <Characters v-show="displayToggle === 'characters'" />
        <Placeholder v-show="displayToggle === 'factions' || displayToggle === 'struct'" />
    </div>
</template>

<script>
    import Lore from "./Lore.vue";
    import Characters from "./Characters.vue";
    import Placeholder from "./Placeholder.vue";
    export default {
        name: 'Home',
        components: {
            Lore,
            Characters,
            Placeholder,
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
    #sidebar {
        max-width: 7vw;
        display: flex;
        flex-direction: column;
        position: fixed;
    }
    .div-button {
        background: cyan;
        color: black;
        width: 120px;
        height: 30px;
        margin-bottom: 10px;
        padding-bottom: 20px;
        border-radius: 10px;
    }
    .div-button:hover{
        background: hotpink;
        cursor: pointer;
    }
    .selected {
        background: hotpink;
    }
    @media(max-width: 1000px) {
        #sidebar{
            position: relative;
            flex-direction: row;
            max-width: 100vw;
            justify-content: center;
        }
        .div-button {
            margin-right: 5px;
        }
    }
</style>

