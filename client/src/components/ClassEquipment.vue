<template>
    <div id = "class-equipment">
        <ClassEquip v-for="classEquip in classEquipData" :classEquipData="classEquip" :key="classEquip.name" />
    </div>
</template>

<script>
    import ClassEquip from "./ClassEquip.vue";
    import json from "../equipmentData.json";

    export default {
        name: "ClassEquipment",
        components: {
            ClassEquip
        },
        data: function () {
            return {
                classEquipData: json.classEquipData,
            }
        }
    }
</script>

<style scoped>
    #class-equipment {
        display: flex;
        margin-left: 100px;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 70%;
        margin: auto;
    }
</style>