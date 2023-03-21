<template>
    <div>
        <div id="buttons">
            <button v-on:click="toggle = 'races'" v-bind:class="{selected: toggle ==='races'}">Races</button>
            <button v-on:click="toggle = 'classes'" v-bind:class="{selected: toggle ==='classes'}">Classes</button>
            <button v-on:click="toggle = 'destinies'" v-bind:class="{selected: toggle ==='destinies'}">Destinies</button>
        </div>
        <div id="characters">
            <div id="races" v-show="toggle === 'races'">
                <Races />
            </div>
            <div id="classes" v-show="toggle === 'classes'">
                <Classes />
            </div>
            <div id="destinies" v-show="toggle === 'destinies'">
                <Destinies />
            </div>
        </div>
    </div>
</template>

<script>
    import Classes from "./Classes.vue";
    import Races from "./Races.vue";
    import Destinies from "./Destinies.vue";

    export default {
        name: "Characters",
        components: {
            Classes,
            Races,
            Destinies
        },
        data: function () {
            return {
                toggle: ""
            }
        }
    }
</script>

<style scoped>
    #characters {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #races {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #classes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #destinies {
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
        #races {
            margin: auto;
        }
        #classes {
            margin: auto;
        }
    }
</style>