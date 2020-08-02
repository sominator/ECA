<template>
    <div>
        <div id="buttons">
            <button v-on:click="toggle = 'races'">Choose Race</button>
            <button v-on:click="toggle = 'classes'">Choose Class</button>
            <button v-on:click="toggle = 'archetypes'">Choose Archetype</button>
            <button v-on:click="toggle = 'feats'">Choose Feats</button>
            <button v-on:click="toggle = 'talents'">Choose Talents/Spells</button>
        </div>
        <div id="char-gen">
            <div id="races" v-show="toggle === 'races'">
                <Race v-for="race in raceData" :raceData="race" :key="race.name" :raceChoice="characterData.raceChoice" @raceChosen="updateRace" />
            </div>
            <div id="classes" v-show="toggle === 'classes'">
                <Class v-for="charClass in classData" :classData="charClass" :key="charClass.name" :classChoice="characterData.classChoice" @classChosen="updateClass" />
            </div>
            <div id="archetypes" v-show="toggle === 'archetypes'">
                <h3 v-show="characterData.classChoice === ''">Choose a class to determine your archetype.</h3>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'NIGHT Agent'">
                    <Archetype v-for="archetype in classData.nightAgent.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'Revolutionary'">
                    <Archetype v-for="archetype in classData.revolutionary.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'Technomancer'">
                    <Archetype v-for="archetype in classData.technomancer.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'Terramancer'">
                    <Archetype v-for="archetype in classData.terramancer.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="characterData.classChoice === 'Vanguard'">
                    <Archetype v-for="archetype in classData.vanguard.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="characterData.archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
            </div>
            <div id="feats" v-show="toggle === 'feats'">
                <h3 v-show="characterData.classChoice === ''" style="margin-left: -120px">Choose a class to determine your feats.</h3>
                <div class="feats-sub" v-show="characterData.classChoice === 'NIGHT Agent'">
                    <Feat v-for="feat in classData.nightAgent.feats" :featData="feat" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
                <div class="feats-sub" v-show="characterData.classChoice === 'Revolutionary'">
                    <Feat v-for="feat in classData.revolutionary.feats" :featData="feat" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
                <div class="feats-sub" v-show="characterData.classChoice === 'Technomancer'">
                    <Feat v-for="feat in classData.technomancer.feats" :featData="feat" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
                <div class="feats-sub" v-show="characterData.classChoice === 'Terramancer'">
                    <Feat v-for="feat in classData.terramancer.feats" :featData="feat" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
                <div class="feats-sub" v-show="characterData.classChoice === 'Vanguard'">
                    <Feat v-for="feat in classData.vanguard.feats" :featData="feat" :key="feat.name" :featChoice="characterData.featChoice" @featAdded="addFeat" @featRemoved="removeFeat" />
                </div>
            </div>
            <div id="talents" v-show="toggle === 'talents'">
                <h3 v-show="characterData.archetypeChoice === '' || characterData.archetypeChoice === ' '" style="margin-left: -120px">Choose an archetype to determine your talents/spells.</h3>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Nightpath'">
                    <Spell v-for="spell in classData.nightAgent.archetypes.nightpath.spells" :spellData="spell" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Daypath'">
                    <Spell v-for="spell in classData.nightAgent.archetypes.daypath.spells" :spellData="spell" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Gunslinger'">
                    <Talent v-for="talent in classData.revolutionary.archetypes.gunslinger.talents" :talentData="talent" :key="talent.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Sharpshooter'">
                    <Talent v-for="talent in classData.revolutionary.archetypes.sharpshooter.talents" :talentData="talent" :key="talent.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Combat Engineer'">
                    <Spell v-for="spell in classData.technomancer.archetypes.combatEngineer.spells" :spellData="spell" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Net Specialist'">
                    <Spell v-for="spell in classData.technomancer.archetypes.netSpecialist.spells" :spellData="spell" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Arcane Pitcher'">
                    <Spell v-for="spell in classData.terramancer.archetypes.arcanePitcher.spells" :spellData="spell" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Nature\'s Harbinger'">
                    <Spell v-for="spell in classData.terramancer.archetypes.naturesHarbinger.spells" :spellData="spell" :key="spell.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Assassin'">
                    <Talent v-for="talent in classData.vanguard.archetypes.assassin.talents" :talentData="talent" :key="talent.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
                <div class="talents-sub" v-show="characterData.archetypeChoice === 'Shadowstalker'">
                    <Talent v-for="talent in classData.vanguard.archetypes.shadowstalker.talents" :talentData="talent" :key="talent.name" :talentChoice="characterData.talentChoice" @talentAdded="addTalent" @talentRemoved="removeTalent" />
                </div>
            </div>
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
    import json from "../characterData.json";

    export default {
        name: "CharGen",
        components: {
            Class,
            Race,
            Archetype,
            Feat,
            Talent,
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
                    this.characterData.archetypeChoice = " ";
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
    #buttons {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        margin-left: 10px;
        width: 100px;
        position: fixed;
    }
    button {
        background-color: cyan;
        border-radius: 10px;
        border: 0px;
        height: 50px;
        margin-bottom: 10px;
        font-weight: bold;
        outline: none;
        font-family: 'Trebuchet MS';
    }
    button:hover {
        cursor: pointer;
        background-color: hotpink;
    }
    @media (max-width: 700px) {
        #buttons {
            flex-direction: row;
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
        }
    }
</style>