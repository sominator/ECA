<template>
    <div>
        <div class="talent" v-bind:class="{selected: isActive}" v-on:click="chosen">
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
            talentData: Object,
            talentChoice: Array
        },
        data: function () {
            return {
                choice: "",
                isActive: false
            }
        },
        methods: {
            chosen: function () {
                this.choice = this.talentData.name;
                if (this.isActive) {
                    this.$emit("talentRemoved", this.choice);
                } else {
                    this.$emit("talentAdded", this.choice);
                }
            }
        },
        watch: {
            talentChoice: function () {
                if (this.talentChoice.includes(this.choice)) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            }
        }
    }
</script>

<style scoped>
    .talent {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        min-height: 320px;
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
    img {
        width: 70%;
        height: 70%;
    }
</style>