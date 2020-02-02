<template>
    <div>
        <h2>Character Generator</h2>
        <div id="char-display">
            <p>Your Race: {{raceChoice}}</p>
            <p>Your Class: {{classChoice}}</p>
            <p>Your Archetype: {{archetypeChoice}}</p>
        </div>
        <div id="buttons">
            <button v-on:click="toggle = 'races'">Choose Race</button>
            <button v-on:click="toggle = 'classes'">Choose Class</button>
            <button v-on:click="toggle = 'archetypes'">Choose Archetype</button>
        </div>
        <div id="char-gen">
            <div id="races" v-show="toggle === 'races'">
                <Race :raceData="raceData.dwarf" :raceChoice="raceChoice" @raceChosen="updateRace" />
                <Race :raceData="raceData.gnome" :raceChoice="raceChoice" @raceChosen="updateRace" />
                <Race :raceData="raceData.highAuric" :raceChoice="raceChoice" @raceChosen="updateRace" />
                <Race :raceData="raceData.human" :raceChoice="raceChoice" @raceChosen="updateRace" />
                <Race :raceData="raceData.lowAuric" :raceChoice="raceChoice" @raceChosen="updateRace" />
            </div>
            <div id="classes" v-show="toggle === 'classes'">
                <Class :classData="classData.nightAgent" :classChoice="classChoice" @classChosen="updateClass" />
                <Class :classData="classData.revolutionary" :classChoice="classChoice" @classChosen="updateClass" />
                <Class :classData="classData.technomancer" :classChoice="classChoice" @classChosen="updateClass" />
                <Class :classData="classData.terramancer" :classChoice="classChoice" @classChosen="updateClass" />
                <Class :classData="classData.vanguard" :classChoice="classChoice" @classChosen="updateClass" />
            </div>
            <div id="archetypes" v-show="toggle === 'archetypes'">
                <h3 v-show="classChoice === ''">Choose a class to determine your archetype.</h3>
                <div class="archetypes-sub" v-show="classChoice === 'Night Agent'">
                    <Archetype :archetypeData="classData.nightAgent.archetypes.nightpath" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                    <Archetype :archetypeData="classData.nightAgent.archetypes.daypath" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="classChoice === 'Revolutionary'">
                    <Archetype :archetypeData="classData.revolutionary.archetypes.gunslinger" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                    <Archetype :archetypeData="classData.revolutionary.archetypes.sharpshooter" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="classChoice === 'Technomancer'">
                    <Archetype :archetypeData="classData.technomancer.archetypes.combatEngineer" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                    <Archetype :archetypeData="classData.technomancer.archetypes.netSpecialist" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="classChoice === 'Terramancer'">
                    <Archetype :archetypeData="classData.terramancer.archetypes.arcanePitcher" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                    <Archetype :archetypeData="classData.terramancer.archetypes.naturesHarbinger" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="classChoice === 'Vanguard'">
                    <Archetype :archetypeData="classData.vanguard.archetypes.assassin" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                    <Archetype :archetypeData="classData.vanguard.archetypes.shadowstalker" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Class from "./Class.vue";
    import Race from "./Race.vue";
    import Archetype from "./Archetype.vue";
    export default {
        name: "CharGen",
        components: {
            Class,
            Race,
            Archetype
        },
        props: {

        },
        data: function () {
            return {
                toggle: "",
                raceChoice: "",
                classChoice: "",
                archetypeChoice: "",
                classData: {
                    nightAgent: {
                        name: "Night Agent",
                        description: "NIGHT Agents are special agents of the highest order, members of a paramilitary force that is called upon to enforce peace among aurics and humans - sometimes using extreme measures. As a NIGHT Agent, you're skilled in espionage and magical combat, and will have to decide between the paths of shadowmancy and photomancy for your archetype.",
                        skills: "Athletics, Grappling, Mancy, Stealth, Tumbling",
                        image: 'NightAgent.png',
                        archetypes: {
                            nightpath: {
                                name: "Nightpath",
                                description: "Master of shadow."
                            },
                            daypath: {
                                name: "Daypath",
                                description: "Master of light."
                            }
                        }
                    },
                    revolutionary: {
                        name: "Revolutionary",
                        description: "Revolutionaries are often allied to Aurichome, sacrificing the comforts of the status quo for the promise of equality for all underraces. As a Revolutionary, you're trained in all manner of ranged combat, and are unparalleled in your understanding of modern vehicles.",
                        skills: "Athletics, Healing, Negotiation, Tumbling, Vehicles",
                        image: 'Revolutionary.png',
                        archetypes: {
                            gunslinger: {
                                name: "Gunslinger",
                                description: "Master of dual pistols."
                            },
                            sharpshooter: {
                                name: "Sharpshooter",
                                description: "Master of sniping."
                            }
                        }
                    },
                    technomancer: {
                        name: "Technomancer",
                        description: "Technomancers are gifted to the extreme in hacking, robotics, and manipulating any type of machinery. As a Technomancer, your training allows you to get closer to the metal with feats and spells than any other class.",
                        skills: "Discernment, Hacking, Knowledge, Mancy, Vehicles",
                        image: 'Technomancer.png',
                        archetypes: {
                            combatEngineer: {
                                name: "Combat Engineer",
                                description: "Master of combat engineering."
                            },
                            netSpecialist: {
                                name: "Net Specialist",
                                description: "Master of the network."
                            }
                        }
                    },
                    terramancer: {
                        name: "Terramancer",
                        description: "Terramancers have dedicated their lives towards communing with nature, drawing their inspiration from the flora and fauna around them. As a Terramancer, your proficiency with healing magic is unmatched, as is your ability to throw projectiles with deadly effect.",
                        skills: "Healing, Knowledge, Mancy, Nature, Negotiation",
                        image: 'Terramancer.png',
                        archetypes: {
                            arcanePitcher: {
                                name: "Arcane Pitcher",
                                description: "Master of magic."
                            },
                            naturesHarbinger: {
                                name: "Nature's Harbinger",
                                description: "Master of nature."
                            }
                        }
                    },
                    vanguard: {
                        name: "Vanguard",
                        description: "Vanguards thrive in the shadows, specializing in the arts of stealth and subterfuge. As a Vanguard, your skills in remaining unseen and getting the drop on your opponents are unparalleled.",
                        skills: "Drama, Hacking, Stealth, Thievery, Tumbling",
                        image: 'Vanguard.png',
                        archetypes: {
                            assassin: {
                                name: "Assassin",
                                description: "Master of assassins."
                            },
                            shadowstalker: {
                                name: "Shadowstalker",
                                description: "Master of shadows."
                            }
                        }
                    }
                },
                raceData: {
                    dwarf: {
                        name: "Dwarf",
                        description: "True Underrace. Many of the so-called underraces have been forced to live underground due to socio-economic pressures or actual laws, but as a dwarf, you take pride in this moniker. You gain advantage on all checks to resist harsh environmental conditions, be it from heat, cold, lack of oxygen or even pressure. Additionally, you can see in the dark within 30 feet of you and can always tell how close you are to the surface while underground."
                    },
                    gnome: {
                        name: "Gnome",
                        description: "Restless Mind. Gnomes are often defined by their ingenuity and out-of-the-box thinking. As a gnome, your mind is constantly racing, coming to conclusions and deductions faster than you can express them. This restless state of mind allows you to come up with creative solutions on the spot. Once per encounter, you can gain advantage on a Will-based check, including skill checks, of your choice. Additionally, if you spend 1 minute investigating an item, you automatically determine its function and purpose."
                    },
                    highAuric: {
                        name: "High Auric",
                        description: "Eye for the Strange. Many humans would describe the underraces as 'magical,' but in the case of the high aurics, this concept takes on a different dimension of meaning. As a high auric, you can spend 1 minute to sense the presence of ceridium - be it an object or creature - within 60 feet of you. At the GM's discretion, you can sense higher concentrations of ceridium from much further distances, and some materials, like lead, can disrupt this ability. Additionally, high aurics are ambidextrous and never suffer from vertigo; when you make an Agility-based check to maintain your balance or perform feats of eye-hand coordination, you gain advantage on that check."
                    },
                    human: {
                        name: "Human",
                        description: "Humanity's Privilege. All humans are created equal, with the operative word being 'humans.' You represent the dominant race on earth, and are treated accordingly. You gain advantage on all Personality-based checks, including skill checks, with a faction of your choice. Additionally, you gain 5 faction points with that faction at the beginning of your first mission."
                    },
                    lowAuric: {
                        name: "Low Auric",
                        description: "Too Burly to Care. 'Freak.' 'Tusker.' 'Pig face.' Most humans think of you as stupid or violent, and you've experienced your fair share of derision. As the most imposing and phenotypically striking underrace, your path hasn't been easy, but has forged you into a sturdy opponent with an attitude to match. The other races can use you as cover, and if at any time you have less than half of your hit points remaining, you gain advantage on all Strength-based checks, including skill checks."
                    }
                }
            }
        },
        methods: {
            updateRace(raceChoice) {
                this.raceChoice = raceChoice;
            },
            updateClass(classChoice) {
                if (this.classChoice !== classChoice) {
                    this.classChoice = classChoice;
                    this.archetypeChoice = " ";
                }
            },
            updateArchetype(archetypeChoice) {
                this.archetypeChoice = archetypeChoice;
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
    .archetypes-sub {
        display: inline-flex;
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
        button {
            margin-left: 2.5px;
            margin-right: 2.5px;
        }
    }
</style>