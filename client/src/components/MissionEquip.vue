<template>
    <div>
        <div class="mission-equip">
            <h3>{{missionEquipData.name}}</h3>
            <p v-if="missionEquipData.requirement">
                Requirement: {{missionEquipData.requirement}}
            </p>
            <p>{{missionEquipData.description}}</p>
            <p v-if="missionEquipData.enhanced">
                Enhanced: {{missionEquipData.enhanced}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MissionEquip",
        props: {
            missionEquipData: Object
        }
    }
</script>

<style scoped>
    .mission-equip {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        min-height: 490px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .mission-equip:hover {
        border-color: hotpink;
        cursor: pointer;
    }

    .selected {
        border-color: hotpink;
    }

    h3 {
        text-align: center
    }
</style>