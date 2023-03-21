<template>
    <div>
        <div class="npc">
            <h3>{{npcData.name}}</h3>
            <p>{{npcData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NPC",
        props: {
            npcData: Object,
        }
    }
</script>

<style scoped>
    .npc {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        height: 400px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .npc:hover {
        border-color: hotpink;
        cursor: pointer;
    }
    h3 {
        text-align: center
    }
</style>