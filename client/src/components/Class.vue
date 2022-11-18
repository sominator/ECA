<template>
    <div id="class">
        <div id="buttons">
            <button v-on:click="toggle = 'feats'" v-bind:class="{selected: toggle === 'feats'}">Feats</button>
            <button v-on:click="toggle = 'talents'" v-bind:class="{selected: toggle === 'talents'}">Talents/Spells</button>
        </div>
        <div v-if="toggle === 'feats'">
            <Feats :featData="classData.feats" />
        </div>
        <div v-if="toggle === 'talents'">
            <Talents :archetypeData="classData.archetypes" />
        </div>
    </div>
</template>

<script>
    import Feats from "./Feats.vue";
    import Talents from "./Talents.vue";

    export default {
        name: "Class",
        components: {
            Feats,
            Talents
        },
        props: {
            classData: Object,
        },
        data: function() {
            return {
                toggle: null
            }
        }
    }
</script>

<style scoped>
    #buttons {
        justify-content: center;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        margin: 3px 0px 7px 0px;
    }

    button {
        background-color: cyan;
        border-radius: 10px;
        border: 0px;
        width: 100px;
        height: 30px;
        margin-right: 5px;
        font-weight: bold;
        outline: none;
        font-family: 'Trebuchet MS';
    }

    button:hover {
        cursor: pointer;
        background-color: hotpink;
    }

    .selected {
        background: hotpink;
    }

    @media (max-width: 1000px) {
        #buttons {
            flex-direction: row;
            flex-wrap: wrap;
            position: relative;
            margin: auto;
            justify-content: center;
        }
    }
</style>