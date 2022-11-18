<template>
    <div id = "races">
        <Race v-for="race in raceData" :raceData="race" :key="race.name" />
    </div>
</template>

<script>
    import Race from "./Race.vue";
    import json from "../characterData.json";

    export default {
        name: "Races",
        components: {
            Race
        },
        data: function () {
            return {
                raceData: json.raceData,
            }
        }
    }
</script>

<style scoped>
    #races {
        display: flex;
        margin-left: 100px;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>