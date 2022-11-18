<template>
    <div>
        <div class="feat">
            <h3>{{featData.name}}</h3>
            <p>Requirement: {{featData.requirement}}</p>
            <p>{{featData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Feat",
        props: {
            featData: Object
        }
    }
</script>

<style scoped>
    .feat {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        min-height: 400px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .feat:hover {
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