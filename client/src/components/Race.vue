<template>
    <div>
        <div class="race">
            <h3>{{raceData.name}}</h3>
            <p>{{raceData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Race",
        props: {
            raceData: Object
        }
    }
</script>

<style scoped>
    .race {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        height: 470px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .race:hover {
        border-color: hotpink;
        cursor: pointer;
    }
    h3 {
        text-align: center
    }
</style>