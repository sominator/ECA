<template>
    <div>
        <div class="talent">
            <h3>{{talentData.name}}</h3>
            <p>Requirement: {{talentData.requirement}}</p>
            <p>{{talentData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Talent",
        props: {
            talentData: Object
        }
    }
</script>

<style scoped>
    .talent {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        min-height: 400px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .talent:hover {
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