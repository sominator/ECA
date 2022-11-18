<template>
    <div id="home">
        <h1>Entromancy Compendium <span>ALPHA</span></h1>
        <div id="sidebar">
            <div class="div-button" v-on:click="displayToggle = 'characters'" v-bind:class="{selected: displayToggle==='characters'}">
                <p>Characters</p>
            </div>
            <div class="div-button" v-on:click="displayToggle = 'locations'" v-bind:class="{selected: displayToggle==='locations'}">
                <p>Locations</p>
            </div>
            <div class="div-button" v-on:click="displayToggle = 'npcs'" v-bind:class="{selected: displayToggle==='npcs'}">
                <p>NPCs</p>
            </div>
            <div class="div-button" v-on:click="displayToggle = 'gear'" v-bind:class="{selected: displayToggle==='gear'}">
                <p>Gear</p>
            </div>
            <div class="div-button" v-on:click="displayToggle = 'cybernetics'" v-bind:class="{selected: displayToggle==='cybernetics'}">
                <p>Cybernetics</p>
            </div>
            <div class="div-button" v-on:click="displayToggle = 'struct'" v-bind:class="{selected: displayToggle==='struct'}">
                <p>Struct</p>
            </div>
        </div>
        <Characters v-show="displayToggle === 'characters'" />
        <Locations v-show="displayToggle === 'locations'" />
        <Placeholder v-show="displayToggle === 'npcs' || displayToggle === 'gear' || displayToggle === 'cybernetics' || displayToggle === 'struct'" />
    </div>
</template>

<script>
    import Locations from "./Locations.vue";
    import Characters from "./Characters.vue";
    import Placeholder from "./Placeholder.vue";
    export default {
        name: 'Home',
        components: {
            Locations,
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

