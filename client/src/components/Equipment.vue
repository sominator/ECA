<template>
    <div>
        <div id="buttons">
            <button v-on:click="toggle = 'class-equipment'" v-bind:class="{selected: toggle ==='class-equipment'}">Class Equipment</button>
            <button v-on:click="toggle = 'mission-equipment'" v-bind:class="{selected: toggle ==='mission-equipment'}">Mission Equipment</button>
        </div>
        <div id="equipment">
            <div id="class-equipment" v-show="toggle === 'class-equipment'">
                <ClassEquipment />
            </div>
            <div id="mission-equipment" v-show="toggle === 'mission-equipment'">
                <MissionEquipment />
            </div>
        </div>
    </div>
</template>

<script>
    import ClassEquipment from "./ClassEquipment.vue";
    import MissionEquipment from "./MissionEquipment.vue";

    export default {
        name: "Equipment",
        components: {
            ClassEquipment,
            MissionEquipment
        },
        data: function () {
            return {
                toggle: ""
            }
        }
    }
</script>

<style scoped>
    #equipment {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #class-equipment {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #mission-equipment {
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
        #class-equipment {
            margin: auto;
        }
        #mission-equipment {
            margin: auto;
        }
    }
</style>