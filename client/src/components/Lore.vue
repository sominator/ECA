<template>
    <div>
        <div id="buttons">
            <button v-on:click="toggle = 'locations'" v-bind:class="{selected: toggle==='locations'}">Key Locations</button>
            <button v-on:click="toggle = 'npcs'" v-bind:class="{selected: toggle==='npcs'}">Key Characters</button>
        </div>
        <div id="lore">
            <div id="locations" v-show="toggle === 'locations'">
                <Location v-for="location in locationData" :locationData="location" :key="location.name" />
            </div>
            <div id="npcs" v-show="toggle === 'npcs'">
                <NPC v-for="npc in npcData" :npcData="npc" :key="npc.name" />
            </div>
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
                toggle: "locations",
                locationData: json.locationData,
                npcData: json.npcData
            }
        }
    }
</script>

<style scoped>
    #lore {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 5%;
    }

    #locations {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #npcs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #buttons {
        justify-content: center;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        margin: 3px 0px 7px 0px;
    }

    @media (max-width: 1000px) {
        #buttons {
            flex-direction: row;
            flex-wrap: wrap;
            position: relative;
            margin: auto;
            justify-content: center;
        }

        #locations {
            margin: auto;
        }

        #npcs {
            margin: auto;
        }

    }

</style>