<template>
    <div>
        <div id="buttons">
            <button v-on:click="toggle = 'races'" v-bind:class="{selected: toggle ==='races'}">Race</button>
            <button v-on:click="toggle = 'classes'" v-bind:class="{selected: toggle ==='classes'}">Class</button>
            <button v-on:click="toggle = 'archetypes'" v-bind:class="{selected: toggle ==='archetypes'}">Archetype</button>
            <button v-on:click="toggle = 'feats'" v-bind:class="{selected: toggle ==='feats'}">Feats</button>
            <button v-on:click="toggle = 'talents'" v-bind:class="{selected: toggle ==='talents'}">Talents/Spells</button>
            <button v-on:click="toggle = 'destinies'" v-bind:class="{selected: toggle ==='destinies'}">Destinies</button>
            <button v-on:click="toggle = 'gear'" v-bind:class="{selected: toggle ==='gear'}">Gear</button>
            <button v-on:click="toggle = 'cybernetics'" v-bind:class="{selected: toggle ==='cybernetics'}">Cybernetics</button>
        </div>
        <div id="char-gen">
            <div id="races" v-show="toggle === 'races'">
                <Race v-for="(race, index) in raceData" :raceData="race" :index="index" :key="race.name" :raceChoice="characterData.raceChoice" @raceChosen="updateRace" />
            </div>
            <div id="classes" v-show="toggle === 'classes'">
                <Class v-for="(charClass, index) in classData" :classData="charClass" :index="index" :key="charClass.name" :classChoice="characterData.classChoice" @classChosen="updateClass" />
            </div>
            <div id="archetypes" v-show="toggle === 'archetypes'">
                <h3 v-show="characterData.classChoice === ''">Choose a class to determine your archetype.</h3>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'nightAgent'">
                    <Archetype v-for="(archetype, index) in classData.nightAgent.archetypes" :archetypeData="archetype" :index="index" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'revolutionary'">
                    <Archetype v-for="(archetype, index) in classData.revolutionary.archetypes" :archetypeData="archetype" :index="index" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'technomancer'">
                    <Archetype v-for="(archetype, index) in classData.technomancer.archetypes" :archetypeData="archetype" :index="index" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'terramancer'">
                    <Archetype v-for="(archetype, index) in classData.terramancer.archetypes" :archetypeData="archetype" :index="index" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'vanguard'">
                    <Archetype v-for="(archetype, index) in classData.vanguard.archetypes" :archetypeData="archetype" :index="index" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
            </div>
            <div id="feats" v-show="toggle === 'feats'">
                <h3 v-show="characterData.classChoice === ''" style="margin-left: -120px">Choose a class to determine your feats.</h3>
                <div class="feats-sub" v-show="characterData.classChoice === 'nightAgent'">
                    <Feat v-for="(feat, index) in classData.nightAgent.feats" :featData="feat" :index="index" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
                <div class="feats-sub" v-show="characterData.classChoice === 'revolutionary'">
                    <Feat v-for="(feat, index) in classData.revolutionary.feats" :featData="feat" :index="index" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
                <div class="feats-sub" v-show="characterData.classChoice === 'technomancer'">
                    <Feat v-for="(feat, index) in classData.technomancer.feats" :featData="feat" :index="index" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
                <div class="feats-sub" v-show="characterData.classChoice === 'terramancer'">
                    <Feat v-for="(feat, index) in classData.terramancer.feats" :featData="feat" :index="index" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
                <div class="feats-sub" v-show="characterData.classChoice === 'vanguard'">
                    <Feat v-for="(feat, index) in classData.vanguard.feats" :featData="feat" :index="index" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
            </div>
            <div id="talents" v-show="toggle === 'talents'">
                <h3 v-show="characterData.archetypeChoice === '' || characterData.archetypeChoice === ' '" style="margin-left: -120px">Choose an archetype to determine your talents/spells.</h3>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'nightpath'">
                    <Spell v-for="(spell, index) in classData.nightAgent.archetypes.nightpath.spells" :spellData="spell" :index="index" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'daypath'">
                    <Spell v-for="(spell, index) in classData.nightAgent.archetypes.daypath.spells" :spellData="spell" :index="index" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'gunslinger'">
                    <Talent v-for="(talent, index) in classData.revolutionary.archetypes.gunslinger.talents" :talentData="talent" :index="index" :key="talent.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'sharpshooter'">
                    <Talent v-for="(talent, index) in classData.revolutionary.archetypes.sharpshooter.talents" :talentData="talent" :index="index" :key="talent.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'combatEngineer'">
                    <Spell v-for="(spell, index) in classData.technomancer.archetypes.combatEngineer.spells" :spellData="spell" :index="index" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'netSpecialist'">
                    <Spell v-for="(spell, index) in classData.technomancer.archetypes.netSpecialist.spells" :spellData="spell" :index="index" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'arcanePitcher'">
                    <Spell v-for="(spell, index) in classData.terramancer.archetypes.arcanePitcher.spells" :spellData="spell" :index="index" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'naturesHarbinger'">
                    <Spell v-for="(spell, index) in classData.terramancer.archetypes.naturesHarbinger.spells" :spellData="spell" :index="index" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'assassin'">
                    <Talent v-for="(talent, index) in classData.vanguard.archetypes.assassin.talents" :talentData="talent" :index="index" :key="talent.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'shadowstalker'">
                    <Talent v-for="(talent, index) in classData.vanguard.archetypes.shadowstalker.talents" :talentData="talent" :index="index" :key="talent.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
            </div>
            <Placeholder v-show="toggle === 'destinies' || toggle === 'gear' || toggle === 'cybernetics'" />
        </div>
    </div>
</template>

<script>
    import Class from "./Class.vue";
    import Race from "./Race.vue";
    import Archetype from "./Archetype.vue";
    import Feat from "./Feat.vue";
    import Talent from "./Talent.vue";
    import Spell from "./Spell.vue";
    import Placeholder from "./Placeholder.vue";
    import json from "../characterData.json";

    export default {
        name: "CharGen",
        components: {
            Class,
            Race,
            Archetype,
            Feat,
            Talent,
            Placeholder,
            Spell
        },
        data: function () {
            return {
                toggle: "",
                classData: json.classData,
                raceData: json.raceData,
                characterData: {
                    raceChoice: "",
                    classChoice: "",
                    archetypeChoice: "",
                    featChoice: [],
                    talentChoice: [],
                }
            }
        },
        methods: {
            updateRace(raceChoice) {
                this.characterData.raceChoice = raceChoice;
                this.$emit("characterUpdated", this.characterData);
            },
            updateClass(classChoice) {
                if (this.characterData.classChoice !== classChoice) {
                    this.characterData.classChoice = classChoice;
                    this.characterData.archetypeChoice = "";
                    this.characterData.featChoice = [];
                    this.characterData.talentChoice = [];
                    this.$emit("characterUpdated", this.characterData);
                }
            },
            updateArchetype(archetypeChoice) {
                if (this.characterData.archetypeChoice !== archetypeChoice) {
                    this.characterData.archetypeChoice = archetypeChoice;
                    this.characterData.talentChoice = [];
                    this.$emit("characterUpdated", this.characterData);
                }
            },
            addFeat(featChoice) {
                this.characterData.featChoice.push(featChoice);
                this.$emit("characterUpdated", this.characterData);
            },
            removeFeat(featChoice) {
                this.characterData.featChoice = this.characterData.featChoice.filter(i => i !== featChoice);
                this.$emit("characterUpdated", this.characterData);
            },
            addTalent(talentChoice) {
                this.characterData.talentChoice.push(talentChoice);
                this.$emit("characterUpdated", this.characterData);
            },
            removeTalent(talentChoice) {
                this.characterData.talentChoice = this.characterData.talentChoice.filter(i => i !== talentChoice);
                this.$emit("characterUpdated", this.characterData);
            }
        }
    }
</script>

<style scoped>
    #char-gen {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #races {
        display: flex;
        flex-wrap: wrap;
        margin-left: 100px;
        justify-content: center;
    }
    #classes {
        display: flex;
        flex-wrap: wrap;
        margin-left: 100px;
        justify-content: center;
    }
    #archetypes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #feats {
        display: flex;
        flex-wrap: wrap;
        margin-left: 120px;
        justify-content: center;
    }
    #talents {
        display: flex;
        flex-wrap: wrap;
        margin-left: 120px;
        justify-content: center;
    }
    .archetypes-sub {
        display: inline-flex;
        flex-wrap: wrap;
    }
    .feats-sub {
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .talents-sub {
        display: inline-flex;
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
        #feats {
            margin: auto;
        }
        #talents {
            margin: auto;
        }
        button {
            margin-left: 2.5px;
            margin-right: 2.5px;
            margin-bottom: 2.5px;
        }
    }
</style>