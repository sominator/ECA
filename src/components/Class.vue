<template>
    <div>
        <div class="class" v-bind:class="{selected: isActive}" v-on:click="chosen">
            <h3>{{classData.name}}</h3>
            <p>{{classData.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Class",
        props: {
            classData: Object,
            classChoice: String
        },
        data: function () {
            return {
                choice: "",
                isActive: false
            }
        },
        methods: {
            chosen: function () {
                this.choice = this.classData.name;
                this.$emit("classChosen", this.choice);
            }
        },
        watch: {
            classChoice: function () {
                if (this.classChoice === this.choice) {
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            }
        }
    }
</script>

<style scoped>
    .class {
        border: 3px solid cyan;
        border-radius: 5px;
        text-align: left;
        width: 250px;
        height: 270px;
        padding-left: 5px;
        margin: 5px 5px 5px 5px;
    }
    .class:hover {
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