<template>
    <div>
        <div class="div-button" v-on:click="displayToggle = 'locations'" v-bind:class="{selected: displayToggle==='locations'}">
            <p>Key Locations</p>
        </div>
        <div class="div-button" v-on:click="displayToggle = 'npcs'" v-bind:class="{selected: displayToggle==='npcs'}">
            <p>Key Characters</p>
        </div>
        <div id="locations" v-show="displayToggle === 'locations'">
            <Location v-for="location in locationData" :locationData="location" :key="location.name" />
        </div>
        <div id="npcs" v-show="displayToggle === 'npcs'">
            <NPC v-for="npc in npcData" :npcData="npc" :key="npc.name" />
        </div>
    </div>
</template>

<script>
    import Location from "./Location.vue";
    import NPC from "./NPC.vue";
    import json from "../loreData.json";
    export default {
        name: "Lore",
        components: {
            Location,
            NPC
        },
        data: function () {
            return {
                displayToggle: "locations",
                locationData: json.locationData,
                npcData: json.npcData
            }
        }
    }
</script>

<style scoped>
    #locations {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 70%;
        margin: auto;
    }
    #npcs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 70%;
        margin: auto;
    }
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