<template>
    <div>
        <div class="feat" v-bind:class="{selected: isActive}" v-on:click="chosen">
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
            featData: Object,
            featChoice: Array,
            index: String
        },
        data: function () {
            return {
                isActive: false
            }
        },
        methods: {
            chosen: function () {
                if (this.isActive) {
                    this.$emit("featRemoved", this.index);
                } else {
                    this.$emit("featAdded", this.index);
                }
            }
        },
        watch: {
            featChoice: function () {
                if (this.featChoice.includes(this.index)) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            }
        }
    }
</script>

<style scoped>
    .feat {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        min-height: 320px;
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