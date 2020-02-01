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
                        description: "NIGHT Agents are special agents of the highest order, members of a paramilitary force that is called upon to enforce peace among aurics and humans - sometimes using extreme measures. As a NIGHT Agent, you're skilled in espionage and magical combat, and will have to decide between the paths of shadowmancy and photomancy for your archetype.",
                        skills: "Athletics, Grappling, Mancy, Stealth, Tumbling"
                    },
                    revolutionary: {
                        name: "Revolutionary",
                        description: "Revolutionaries are often allied to Aurichome, sacrificing the comforts of the status quo for the promise of equality for all underraces. As a Revolutionary, you're trained in all manner of ranged combat, and are unparalleled in your understanding of modern vehicles.",
                        skills: "Athletics, Healing, Negotiation, Tumbling, Vehicles"
                    },
                    technomancer: {
                        name: "Technomancer",
                        description: "Technomancers are gifted to the extreme in hacking, robotics, and manipulating any type of machinery. As a Technomancer, your training allows you to get closer to the metal with feats and spells than any other class.",
                        skills: "Discernment, Hacking, Knowledge, Mancy, Vehicles"
                    },
                    terramancer: {
                        name: "Terramancer",
                        description: "Terramancers have dedicated their lives towards communing with nature, drawing their inspiration from the flora and fauna around them. As a Terramancer, your proficiency with healing magic is unmatched, as is your ability to throw projectiles with deadly effect.",
                        skills: "Healing, Knowledge, Mancy, Nature, Negotiation"
                    },
                    vanguard: {
                        name: "Vanguard",
                        description: "Vanguards thrive in the shadows, specializing in the arts of stealth and subterfuge. As a Vanguard, your skills in remaining unseen and getting the drop on your opponents are unparalleled.",
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