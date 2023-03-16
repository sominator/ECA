<template>
    <div>
        <div class="classEquip">
            <h3>{{classEquipData.name}}</h3>
            <p>{{classEquipData.description}}</p>
            <p v-if="classEquipData.name.includes('*')">
                *Included in <i><span>Entromancy: The Orichite Age</span></i>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClassEquip",
        props: {
            classEquipData: Object
        }
    }
</script>

<style scoped>
    .classEquip {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        height: 270px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .classEquip:hover {
        border-color: hotpink;
        cursor: pointer;
    }
    h3 {
        text-align: center
    }
</style>