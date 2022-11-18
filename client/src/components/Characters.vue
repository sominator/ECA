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
            <Placeholder v-show="toggle === 'destinies'" />
        </div>
    </div>
</template>

<script>
    import Classes from "./Classes.vue";
    import Races from "./Races.vue";
    import Placeholder from "./Placeholder.vue";

    export default {
        name: "Characters",
        components: {
            Classes,
            Races,
            Placeholder
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
    .selected {
        background: hotpink;
    }
    #buttons {
        justify-content: center;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        margin: 3px 0px 7px 0px;
    }
    button {
        background-color: cyan;
        border-radius: 10px;
        border: 0px;
        width: 100px;
        height: 30px;
        margin-right: 5px;
        font-weight: bold;
        outline: none;
        font-family: 'Trebuchet MS';
    }
    button:hover {
        cursor: pointer;
        background-color: hotpink;
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
        button {
            margin-left: 2.5px;
            margin-right: 2.5px;
            margin-bottom: 2.5px;
        }
    }
</style>