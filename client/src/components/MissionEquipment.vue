<template>
    <div>
        <div id="buttons">
            <button v-for="missionEquip in missionEquipData"
                    v-on:click="toggle = missionEquip"
                    v-bind:class="{selected: toggle === missionEquip}"
                    v-bind:key="missionEquip.name">
                {{missionEquip.name}}
            </button>
        </div>
        <div id="mission-equipment" v-if="toggle !== null">
            <MissionEquip v-for="equipment in toggle.equipment" :missionEquipData ="equipment" />
        </div>
    </div>
</template>

<script>
    import MissionEquip from "./MissionEquip.vue";
    import json from "../equipmentData.json";

    export default {
        name: "MissionEquipment",
        components: {
            MissionEquip
        },
        data: function () {
            return {
                missionEquipData: json.missionEquipData,
                toggle: null
            }
        }
    }
</script>

<style scoped>
    #mission-equipment {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 70%;
        margin: auto;
    }
    #buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>