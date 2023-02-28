<template>
    <div>
        <div id="buttons">
            <button v-for="destiny in destinyData"
                    v-on:click="toggle = destiny"
                    v-bind:class="{selected: toggle === destiny}"
                    v-bind:key="destiny.name">
                {{destiny.name}}
            </button>
        </div>
        <div id="talents" v-if="toggle !== null && toggle.talents">
            <Talent v-for="talent in toggle.talents" :talentData="talent" />
        </div>
        <div id="spells" v-if="toggle !== null && toggle.spells">
            <Spell v-for="spell in toggle.spells" :spellData ="spell" />
        </div>
    </div>
</template>

<script>
    import Talent from "./Talent.vue";
    import Spell from "./Spell.vue";
    import json from "../characterData.json";

    export default {
        name: "Destinies",
        components: {
            Talent,
            Spell
        },
        data: function () {
            return {
                destinyData: json.destinyData,
                toggle: null
            }
        }
    }
</script>

<style scoped>
    #talents {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #spells {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    button {
        background-color: cyan;
        border-radius: 10px;
        border: 0px;
        width: 100px;
        height: 35px;
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
</style>