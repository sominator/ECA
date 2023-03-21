<template>
    <div id = "classes">
        <div id="buttons">
            <button 
                    v-for="charClass in classData"
                    v-on:click="toggle = charClass"
                    v-bind:class="{selected: toggle === charClass}">
                    {{charClass.name}}
            </button>
        </div>
        <div v-if="toggle !== null">
            <Class :classData="toggle" :key="toggle.name" />
        </div>
    </div>
</template>

<script>
    import Class from "./Class.vue";
    import json from "../characterData.json";

    export default {
        name: "Classes",
        components: {
            Class
        },
        data: function () {
            return {
                classData: json.classData,
                toggle: null
            }
        }
    }
</script>

<style scoped>
    #classes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 50%;
    }

    #buttons {
        justify-content: center;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        margin: 3px 0px 7px 0px;
    }

    @media (max-width: 1000px) {
        #buttons {
            flex-direction: row;
            flex-wrap: wrap;
            position: relative;
            margin: auto;
            justify-content: center;
        }
        button {
            margin-right: 5px;
            margin-bottom: 5px;
        }
    }
</style>