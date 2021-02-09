<template>
    <div>
        <div class="archetype" v-bind:class="{selected: isActive}" v-on:click="chosen">
            <h3>{{archetypeData.name}}</h3>
            <p>{{archetypeData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Archetype",
        props: {
            archetypeData: Object,
            archetypeChoice: String,
            index: String
        },
        data: function () {
            return {
                isActive: false
            }
        },
        methods: {
            chosen: function () {
                this.$emit("archetypeChosen", this.index);
            }
        },
        watch: {
            archetypeChoice: function () {
                if (this.archetypeChoice === this.index) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            }
        }
    }
</script>

<style scoped>
    .archetype {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: center;
        width: 200px;
        height: 150px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .archetype:hover {
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