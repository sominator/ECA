<template>
    <div>
        <h2>Character Generator</h2>
        <div class="div-button" v-on:click="displayToggle = 'chargen'" v-bind:class="{selected: displayToggle==='chargen'}">
            <p>Create Character</p>
        </div>
        <div class="div-button" v-on:click="displayToggle = 'charview'" v-bind:class="{selected: displayToggle==='charview'}">
            <p>View Character</p>
        </div>
        <CharGen v-show="displayToggle === 'chargen'" @characterUpdated="updateCharacter"/>
        <CharView v-show="displayToggle === 'charview'" :characterData="characterData"/>
    </div>
</template>

<script>
    import CharGen from "./CharGen.vue";
    import CharView from "./CharView.vue";

    export default {
        name: "Characters",
        components: {
            CharGen,
            CharView
        },
        data: function () {
            return {
                displayToggle: "",
                characterData: {
                    raceChoice: "",
                    classChoice: "",
                    archetypeChoice: "",
                    featChoice: [],
                    talentChoice: []
                }
            }
        },
        methods: {
            updateCharacter(characterData) {
                this.characterData = characterData;
            }
        }
    }
</script>

<style scoped>
    .div-button {
        display: inline-block;
        background: cyan;
        color: black;
        width: 200px;
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