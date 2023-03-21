<template>
    <div>
        <div id="buttons">
            <button v-for="archetype in archetypeData"
                    v-on:click="toggle = archetype"
                    v-bind:class="{selected: toggle === archetype}"
                    v-bind:key="archetype.name">
                {{archetype.name}}
            </button>
        </div>
        <div id="talents" v-if="toggle !== null && toggle.talents">
            <Talent v-for="talent in toggle.talents" :talentData="talent" />
        </div>
        <div id="spells" v-if="toggle !== null && toggle.spells">
            <Spell v-for="spell in toggle.spells" :spellData ="spell" />
        </div>
    </div>
</template>

<script>
    import Talent from "./Talent.vue";
    import Spell from "./Spell.vue";

    export default {
        name: "Talents",
        components: {
            Talent,
            Spell
        },
        props: {
            archetypeData: Object
        },
        data: function () {
            return {
                toggle: null
            }
        }
    }
</script>

<style scoped>
    #talents {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #spells {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>