<template>
    <div>
        <div class="lore-item">
            <h3>{{loreData.name}}</h3>
            <p>{{loreData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoreItem",
        props: {
            loreData: Object,
        }
    }
</script>

<style scoped>
    .lore-item {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        padding-left: 5px;
        margin: 20px 5px 5px 5px;
    }
    .lore-item:hover {
        border-color: hotpink;
        cursor: pointer;
    }
    h3 {
        text-align: center
    }
</style>