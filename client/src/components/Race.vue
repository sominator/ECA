<template>
    <div>
        <div class="race" v-bind:class="{selected: isActive}" v-on:click="chosen">
            <h3>{{raceData.name}}</h3>
            <p>{{raceData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Race",
        props: {
            raceData: Object,
            raceChoice: String,
            index: String
        },
        data: function () {
            return {
                isActive: false
            }
        },
        methods: {
            chosen: function () {
                this.$emit("raceChosen", this.index);
            }
        },
        watch: {
            raceChoice: function () {
                if (this.raceChoice === this.index) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            }
        }
    }
</script>

<style scoped>
    .race {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        height: 455px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .race:hover {
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