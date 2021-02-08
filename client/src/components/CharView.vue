<template>
    <div id="flex-container">
        <div id="image">
            <h3 v-if="characterData.classChoice===''">Choose a class to display your character.</h3>
            <img v-if="characterData.classChoice==='NIGHT Agent'" src="../assets/NightAgent.png" />
            <img v-if="characterData.classChoice==='Revolutionary'" src="../assets/Revolutionary.png" />
            <img v-if="characterData.classChoice==='Technomancer'" src="../assets/Technomancer.png" />
            <img v-if="characterData.classChoice==='Terramancer'" src="../assets/Terramancer.png" />
            <img v-if="characterData.classChoice==='Vanguard'" src="../assets/Vanguard.png" />
        </div>
        <div id="character">
            <h2>Race:
                <span v-on:click="raceDescription(characterData.raceChoice)">{{characterData.raceChoice}}</span>
            </h2>
            <h2>Class:
                <span>{{characterData.classChoice}}</span>
            </h2>
            <h2>Archetype:
                <span>{{characterData.archetypeChoice}}</span>
            </h2>
            <h2>Feats:</h2>
            <ul>
                <li v-for="feat in characterData.featChoice" v-bind:key="feat">{{feat}}</li>
            </ul>
            <h2>Talents/Spells:</h2>
            <ul>
                <li v-for="talent in characterData.talentChoice" v-bind:key="talent">{{talent}}</li>
            </ul>
        </div>
        
    </div>
</template>

<script>
    import json from "../characterData.json";
    export default {
        name: "CharView",
        props: {
            characterData: Object
        },
        data: function () {
            return {
                classData: json.classData,
                raceData: json.raceData
            }
        },
        methods: {
            raceDescription(str) {
                console.log(this.raceData[this.camelize(str)].description);
                
            },
            camelize(str) {
                return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
                    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
                    return index === 0 ? match.toLowerCase() : match.toUpperCase();
                })
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
        color: hotpink;
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