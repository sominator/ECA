<template>
    <div>
        <div class="hacking-card">
            <h3>{{hackingData.name}}</h3>
            <p v-if="hackingData.cost">
                Cost: {{hackingData.cost}}
            </p>
            <p>{{hackingData.description}}</p>
            <p v-if="hackingData.variables">
                Variables Earned: {{hackingData.variables}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HackingCard",
        props: {
            hackingData: Object
        }
    }
</script>

<style scoped>
    .hacking-card {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        min-height: 400px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }

    .hacking-card:hover {
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