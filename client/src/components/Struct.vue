<template>
    <div>
        <div id="buttons">
            <button v-for="structInterface in structData"
                    v-on:click="toggle = structInterface"
                    v-bind:class="{selected: toggle === structInterface}"
                    v-bind:key="structInterface.name">
                {{structInterface.name}}
            </button>
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Global Objective'">
            <h3>Interface: <span>Global Objective</span></h3>
            <StructInterface :structData="toggle.module2" />
            <h3>Interface: <span>Global Objective::Initialization (The Present Past, Part 1)*</span></h3>
            <StructInterface :structData="toggle.module3.initialization" />
            <h3>Interface: <span>Global Objective::Compilation (The Present Past, Part 1)*</span></h3>
            <StructInterface :structData="toggle.module3.compilation" />
            <h3>Interface: <span>Global Objective::Execution (The Present Past, Part 2)*</span></h3>
            <StructInterface :structData="toggle.module4.execution" />
            <h3>Interface: <span>Global Objective::Restoration (The Present Past, Part 2)*</span></h3>
            <StructInterface :structData="toggle.module4.restoration" />
            <p>*Included in <span>Entromancy: The Orichite Age.</span></p>
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Faction Objective'">
            <h3>Interface: <span>Faction Objective</span></h3>
            <StructInterface :structData="toggle.module2" />
            <h3>Interface: <span>Faction Objective (The Present Past, Part 1)*</span></h3>
            <StructInterface :structData="toggle.module3" />
            <h3>Interface: <span>Faction Objective::Aurichome (The Present Past, Part 2)*</span></h3>
            <StructInterface :structData="toggle.module4.aurichome" />
            <h3>Interface: <span>Faction Objective::NIGHT (The Present Past, Part 2)*</span></h3>
            <StructInterface :structData="toggle.module4.night" />
            <h3>Interface: <span>Faction Objective::Unaligned (The Present Past, Part 2)*</span></h3>
            <StructInterface :structData="toggle.module4.unaligned" />
            <p>*Included in <span>Entromancy: The Orichite Age.</span></p>
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Locations'">
            <h3>Interface: <span>Locations</span></h3>
            <StructInterface :structData="toggle.module2" />
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Encounters'">
            <h3>Interface: <span>Encounters</span></h3>
            <StructInterface :structData="toggle.module2" />
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Faction Points'">
            <h3>Interface: <span>Faction Points</span></h3>
            <StructInterface :structData="toggle.module2" />
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Skill Difficulty'">
            <h3>Interface: <span>Skill Difficulty</span></h3>
            <StructInterface :structData="toggle.module2" />
        </div>
        <div class="interfaces" v-if="toggle !== null && toggle.name === 'NPCs'">
            <h3>Interface: <span>NPCs</span></h3>
            <StructInterface :structData="toggle.module2" />
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Combat Difficulty'">
            <h3>Interface: <span>Combat Difficulty</span></h3>
            <StructInterface :structData="toggle.module2" />
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Outcome'">
            <h3>Interface: <span>Outcome::Success</span></h3>
            <StructInterface :structData="toggle.module2.success" />
            <h3>Interface: <span>Outcome::Failure</span></h3>
            <StructInterface :structData="toggle.module2.failure" />
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'NPC Disposition'">
            <h3>Interface: <span>NPC Disposition</span></h3>
            <StructInterface :structData="toggle.module2" />
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Adversaries'">
            <h3>Interface: <span>Adversaries::Light Threat</span></h3>
            <StructInterface :structData="toggle.module2.light" />
            <h3>Interface: <span>Adversaries::Medium Threat</span></h3>
            <StructInterface :structData="toggle.module2.medium" />
            <h3>Interface: <span>Adversaries::High Threat</span></h3>
            <StructInterface :structData="toggle.module2.high" />
            <h3>Interface: <span>Adversaries::Deadly Threat</span></h3>
            <StructInterface :structData="toggle.module2.deadly" />
            <p>*Animal Companion adversaries do not benefit from the Nature's Chosen Terramancer feature.</p>
            <p>**Refer to the Adversaries section (p. 16) of <span>Entromancy: The Orichite Age - Module 1: Rise of the Redhats.</span></p>
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Redhat Patrols'">
            <h3>Interface: <span>Redhat Patrols*</span></h3>
            <StructInterface :structData="toggle.module3" />
            <p>*Included in <span>Entromancy: The Orichite Age.</span></p>
        </div>
        <div class ="interfaces" v-if="toggle !== null && toggle.name === 'Time Rifts'">
            <h3>Interface: <span>Time Rifts*</span></h3>
            <StructInterface :structData="toggle.module4" />
            <p>*Included in <span>Entromancy: The Orichite Age.</span></p>
        </div>
    </div>
</template>

<script>
    import StructInterface from "./StructInterface.vue";
    import json from "../structData.json";

    export default {
        name: "Struct",
        components: {
            StructInterface
        },
        data: function () {
            return {
                structData: json.structData,
                toggle: null
            }
        }
    }
</script>

<style scoped>
    .interfaces {
        max-width: 80%;
        margin-left: 20%;
    }
    #buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    h3, p {
        text-align: left;
    }
</style>