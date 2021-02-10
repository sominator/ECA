<template>
    <div id="flex-container">
        <div id="image">
            <h3 v-if="characterData.classChoice===''">Choose a class to display your character.</h3>
            <img v-if="characterData.classChoice==='nightAgent'" src="../assets/NightAgent.png" />
            <img v-if="characterData.classChoice==='revolutionary'" src="../assets/Revolutionary.png" />
            <img v-if="characterData.classChoice==='technomancer'" src="../assets/Technomancer.png" />
            <img v-if="characterData.classChoice==='terramancer'" src="../assets/Terramancer.png" />
            <img v-if="characterData.classChoice==='vanguard'" src="../assets/Vanguard.png" />
        </div>
        <div id="character">
            <h2>
                Race:
                <span v-if="characterData.raceChoice !== ''">{{raceData[characterData.raceChoice].name}}</span>
            </h2>
            <h2>
                Class:
                <span v-if="characterData.classChoice !== ''">{{classData[characterData.classChoice].name}}</span>
            </h2>
            <h2>
                Archetype:
                <span v-if="characterData.archetypeChoice !== ''">{{classData[characterData.classChoice].archetypes[characterData.archetypeChoice].name}}</span>
            </h2>
            <h2>Ability Bonuses:</h2>
            <ul v-if="characterData.classChoice !== ''">
                <li>Strength: <span>+{{classData[characterData.classChoice].stats.abilities.strength}}</span></li>
                <li>Agility: <span>+{{classData[characterData.classChoice].stats.abilities.agility}}</span></li>
                <li>Will: <span>+{{classData[characterData.classChoice].stats.abilities.will}}</span></li>
                <li>Personality: <span>+{{classData[characterData.classChoice].stats.abilities.personality}}</span></li>
            </ul>
            <h2>Skills:</h2>
            <ul v-if="characterData.classChoice !== ''">
                <li>Athletics: <span>+{{classData[characterData.classChoice].stats.skills.athletics}}</span></li>
                <li>Awarenesss: <span>+{{classData[characterData.classChoice].stats.skills.awareness}}</span></li>
                <li>Discernment: <span>+{{classData[characterData.classChoice].stats.skills.discernment}}</span></li>
                <li>Drama: <span>+{{classData[characterData.classChoice].stats.skills.drama}}</span></li>
                <li>Grappling: <span>+{{classData[characterData.classChoice].stats.skills.grappling}}</span></li>
                <li>Hacking: <span>+{{classData[characterData.classChoice].stats.skills.hacking}}</span></li>
                <li>Healing: <span>+{{classData[characterData.classChoice].stats.skills.healing}}</span></li>
                <li>Knowledge: <span>+{{classData[characterData.classChoice].stats.skills.knowledge}}</span></li>
                <li>Mancy: <span>+{{classData[characterData.classChoice].stats.skills.mancy}}</span></li>
                <li>Nature: <span>+{{classData[characterData.classChoice].stats.skills.nature}}</span></li>
                <li>Negotiation: <span>+{{classData[characterData.classChoice].stats.skills.negotiation}}</span></li>
                <li>Stealth: <span>+{{classData[characterData.classChoice].stats.skills.stealth}}</span></li>
                <li>Thievery: <span>+{{classData[characterData.classChoice].stats.skills.thievery}}</span></li>
                <li>Tumbling: <span>+{{classData[characterData.classChoice].stats.skills.tumbling}}</span></li>
                <li>Vehicles: <span>+{{classData[characterData.classChoice].stats.skills.vehicles}}</span></li>
            </ul>
            <h2>Combat:</h2>
            <ul v-if="characterData.classChoice !== ''">
                <li>Initiative: <span>+{{classData[characterData.classChoice].stats.initiative}}</span></li>
                <li>HP: <span>{{classData[characterData.classChoice].stats.hp}}</span></li>
                <li>Melee Attack: <span>{{classData[characterData.classChoice].stats.meleeAttack}}</span></li>
                <li>Melee Damage: <span>{{classData[characterData.classChoice].stats.meleeDamage}}</span></li>
                <li>Ranged Attack: <span>{{classData[characterData.classChoice].stats.rangedAttack}}</span></li>
                <li>Ranged Damage: <span>{{classData[characterData.classChoice].stats.rangedDamage}}</span></li>
                <li>Armor Class: <span>{{classData[characterData.classChoice].stats.ac}}</span></li>
                <li>Spell Attack: <span>+{{classData[characterData.classChoice].stats.spellAttack}}</span></li>
                <li>Spell DC: <span>{{classData[characterData.classChoice].stats.spellDC}}</span></li>
            </ul>
            <h2>Feats:</h2>
            <ul v-if="characterData.featChoice !== []">
                <li v-for="feat in characterData.featChoice" v-bind:key="feat" @mouseover="changeHover(feat, 'feat')" @mouseout="changeHover(null, null)"><span>{{classData[characterData.classChoice].feats[feat].name}}</span></li>
            </ul>
            <div v-if="characterData.classChoice === 'nightAgent' || characterData.classChoice === 'technomancer' || characterData.classChoice === 'terramancer'">
                <h2>Spells:</h2>
                <ul v-if="characterData.talentChoice !== []">
                    <li v-for="talent in characterData.talentChoice" v-bind:key="talent" @mouseover="changeHover(talent, 'spell')" @mouseout="changeHover(null, null)"><span>{{classData[characterData.classChoice].archetypes[characterData.archetypeChoice].spells[talent].name}}</span></li>
                </ul>
            </div>
            <div v-else-if="characterData.classChoice === 'revolutionary' || characterData.classChoice === 'vanguard'">
                <h2>Talents:</h2>
                <ul v-if="characterData.talentChoice !== []">
                    <li v-for="talent in characterData.talentChoice" v-bind:key="talent" @mouseover="changeHover(talent, 'talent')" @mouseout="changeHover(null, null)"><span>{{classData[characterData.classChoice].archetypes[characterData.archetypeChoice].talents[talent].name}}</span></li>
                </ul>
            </div>
        </div>
        <div id="tooltip" v-if="characterData.classChoice !== ''">
            <Feat :featData="classData[characterData.classChoice].feats[hoverDisplay]" v-if="hoverType === 'feat'" />
            <Spell :spellData="classData[characterData.classChoice].archetypes[characterData.archetypeChoice].spells[hoverDisplay]" v-if="hoverType === 'spell'" />
            <Talent :talentData="classData[characterData.classChoice].archetypes[characterData.archetypeChoice].talents[hoverDisplay]" v-if="hoverType === 'talent'" />
        </div>
    </div>
</template>

<script>
    import json from "../characterData.json";
    import Feat from "./Feat.vue";
    import Spell from "./Spell.vue";
    import Talent from "./Talent.vue";
    export default {
        name: "CharView",
        components: {
            Feat,
            Spell,
            Talent
        },
        props: {
            characterData: Object
        },
        data: function () {
            return {
                classData: json.classData,
                raceData: json.raceData,
                hoverDisplay: null,
                hoverType: null
            }
        },
        methods: {
            changeHover: function (hoverDisplay, hoverType) {
                this.hoverDisplay = hoverDisplay;
                this.hoverType = hoverType;
            }
        }
    }
</script>

<style scoped>
    #flex-container {
        display: flex;
        max-width: 50%;
        margin: auto;
        margin-top: 20px;
        border: 5px solid cyan;
        text-align: left;
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
    #image {
        width: 50%;
    }
    #character {
        width: 50%;
    }
    #tooltip {
        position: fixed;
        top: 10vh;
        left: 30vw;
        background-color: black;
    }
    span {
        color: hotpink;
    }
    img {
        max-width: 100%;
    }
    ul {
        list-style-type: none;
    }
    li {
        font-size: 22px;
        font-weight: bold;
        padding-bottom: 5px;
    }    
    @media (max-width: 1200px) {
        #flex-container {
            flex-direction: column;
        }
        #image {
            margin: auto;
        }
        #character {
            margin: auto;
        }
    }
</style>