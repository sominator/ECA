<template>
    <div>
        <div class="spell">
            <h3>{{spellData.name}}</h3>
            <p v-if="spellData.entropy">
                Action: {{spellData.action}}<br />
                Range: {{spellData.range}}<br />
                Duration: {{spellData.duration}}<br />
                Entropy: {{spellData.entropy}}
            </p>
            <p v-else>
                Action: {{spellData.action}}<br />
                Range: {{spellData.range}}<br />
                Duration: {{spellData.duration}}<br />
                Ceridium: {{spellData.ceridium}}
            </p>
            <p>{{spellData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Spell",
        props: {
            spellData: Object
        }
    }
</script>

<style scoped>
    .spell {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        min-height: 490px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .spell:hover {
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