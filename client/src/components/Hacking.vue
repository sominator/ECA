<template>
    <div>
        <div id="buttons">
            <button v-on:click="toggle = 'objectives'" v-bind:class="{selected: toggle ==='objectics'}">Objectives</button>
            <button v-on:click="toggle = 'payload-functions'" v-bind:class="{selected: toggle ==='payload-functions'}">Payload Functions</button>
            <button v-on:click="toggle = 'encrypt-functions'" v-bind:class="{selected: toggle ==='encrypt-functions'}">Encrypt Functions</button>
            <button v-on:click="toggle = 'cloak-functions'" v-bind:class="{selected: toggle ==='cloak-functions'}">Cloak Functions</button>
            <button v-on:click="toggle = 'specializations'" v-bind:class="{selected: toggle ==='specializations'}">Specializations</button>
        </div>
        <div id="hacking">
            <div class="subdiv" v-show="toggle === 'objectives'">
                <HackingCard v-for="card in hackingData.objectives" :hackingData = "card" :key="card.name" />
            </div>
            <div class="subdiv" v-show="toggle === 'payload-functions'">
                <HackingCard v-for="card in hackingData.functions.payload" :hackingData="card" :key="card.name" />
            </div>
            <div class="subdiv" v-show="toggle === 'encrypt-functions'">
                <HackingCard v-for="card in hackingData.functions.encrypt" :hackingData="card" :key="card.name" />
            </div>
            <div class="subdiv" v-show="toggle === 'cloak-functions'">
                <HackingCard v-for="card in hackingData.functions.cloak" :hackingData="card" :key="card.name" />
            </div>
            <div class="subdiv" v-show="toggle === 'specializations'">
                <HackingCard v-for="card in hackingData.specializations" :hackingData="card" :key="card.name" />
            </div>
        </div>
    </div>
</template>

<script>
    import HackingCard from "./HackingCard.vue";
    import json from "../hackingData.json";

    export default {
        name: "Hacking",
        components: {
            HackingCard
        },
        data: function () {
            return {
                hackingData: json.hackingData,
                toggle: ""
            }
        }
    }
</script>

<style scoped>
    #hacking {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .subdiv {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
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
        #hacking {
            margin: auto;
        }
    }
</style>