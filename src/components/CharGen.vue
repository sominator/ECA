<template>
    <div>
        <h2>Character Generator</h2>
        <div id="char-gen">
            <Character :characterData = "characterData.nightAgent"/>
            <Character :characterData = "characterData.revolutionary"/>
            <Character :characterData = "characterData.technomancer"/>
            <Character :characterData = "characterData.terramancer"/>
            <Character :characterData = "characterData.vanguard"/>
        </div>
    </div>
</template>

<script>
    import Character from "./Character.vue";
    export default {
        name: "CharGen",
        components: {
            Character
        },
        props: {

        },
        data: function () {
            return {
                characterData: {
                    nightAgent: {
                        name: "Night Agent",
                        skills: "Athletics, Grappling, Mancy, Stealth, Tumbling"
                    },
                    revolutionary: {
                        name: "Revolutionary",
                        skills: "Athletics, Healing, Negotiation, Tumbling, Vehicles"
                    },
                    technomancer: {
                        name: "Technomancer",
                        skills: "Discernment, Hacking, Knowledge, Mancy, Vehicles"
                    },
                    terramancer: {
                        name: "Terramancer",
                        skills: "Healing, Knowledge, Mancy, Nature, Negotiation"
                    },
                    vanguard: {
                        name: "Vanguard",
                        skills: "Drama, Hacking, Stealth, Thievery, Tumbling"
                    }
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    #char-gen {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>