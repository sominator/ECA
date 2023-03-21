<template>
    <div>
        <div class="location">
            <h3>{{locationData.name}}</h3>
            <p>{{locationData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Location",
        props: {
            locationData: Object
        }
    }
</script>

<style scoped>
    .location {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        height: 400px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .location:hover {
        border-color: hotpink;
        cursor: pointer;
    }
    h3 {
        text-align: center
    }
</style>