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
                <span>{{characterData.raceChoice}}</span>
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
    export default {
        name: "CharView",
        props: {
            characterData: Object
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