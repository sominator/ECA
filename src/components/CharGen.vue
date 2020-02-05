<template>
    <div>
        <h2>Character Generator</h2>
        <div id="char-display">
            <p>Your Race: {{raceChoice}}</p>
            <p>Your Class: {{classChoice}}</p>
            <p>Your Archetype: {{archetypeChoice}}</p>
            <p>Your Feats: {{featChoice}}</p>
        </div>
        <div id="buttons">
            <button v-on:click="toggle = 'races'">Choose Race</button>
            <button v-on:click="toggle = 'classes'">Choose Class</button>
            <button v-on:click="toggle = 'archetypes'">Choose Archetype</button>
            <button v-on:click="toggle = 'feats'">Choose Feats</button>
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
            <div id="feats" v-show="toggle === 'feats'">
                <h3 v-show="classChoice === ''">Choose a class to determine your feats.</h3>
                <div class="feats-sub" v-show="classChoice === 'Night Agent'">
                    <Feat :featData="classData.nightAgent.feats.intoTheFray" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.nightAgent.feats.nightTraining" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.nightAgent.feats.preemptiveStrike" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.nightAgent.feats.stunningDefense" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.nightAgent.feats.swordMastery" :featChoice="featChoice" @featChosen="updateFeat" />
                </div>
                <div class="feats-sub" v-show="classChoice === 'Revolutionary'">
                    <Feat :featData="classData.revolutionary.feats.fullMatrices" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.revolutionary.feats.knowledgeIsPower" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.revolutionary.feats.revolutionaryConnections" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.revolutionary.feats.secondChance" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.revolutionary.feats.thousandYardStare" :featChoice="featChoice" @featChosen="updateFeat" />
                </div>
                <div class="feats-sub" v-show="classChoice === 'Technomancer'">
                    <Feat :featData="classData.technomancer.feats.deviousPrototype01" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.technomancer.feats.deviousPrototype02" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.technomancer.feats.deviousPrototype03" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.technomancer.feats.juryRigging" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.technomancer.feats.pinballWizard" :featChoice="featChoice" @featChosen="updateFeat" />
                </div>
                <div class="feats-sub" v-show="classChoice === 'Terramancer'">
                    <Feat :featData="classData.terramancer.feats.arcaneWard" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.terramancer.feats.holisticHealer" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.terramancer.feats.reflectiveWard" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.terramancer.feats.strengthOfTheEarth" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.terramancer.feats.teamSpirit" :featChoice="featChoice" @featChosen="updateFeat" />
                </div>
                <div class="feats-sub" v-show="classChoice === 'Vanguard'">
                    <Feat :featData="classData.vanguard.feats.compromisingStrike" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.vanguard.feats.scoundrelsLuck" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.vanguard.feats.shadowDealer" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.vanguard.feats.sprintAttack" :featChoice="featChoice" @featChosen="updateFeat" />
                    <Feat :featData="classData.vanguard.feats.unendingFlow" :featChoice="featChoice" @featChosen="updateFeat" />
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
    export default {
        name: "CharGen",
        components: {
            Class,
            Race,
            Archetype,
            Feat
        },
        props: {

        },
        data: function () {
            return {
                toggle: "",
                raceChoice: "",
                classChoice: "",
                archetypeChoice: "",
                featChoice: "",
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
                        },
                        feats: {
                            intoTheFray: {
                                name: "Into the Fray",
                                description: "When you take two move actions during your turn, you can attempt a melee attack if you end your second move action within 5 feet of a creature."
                            },
                            nightTraining: {
                                name: "NIGHT Training",
                                description: "Your deeds and training in the NIGHT organization have gained you a certain political cachet and allow you to pick up cues that most would miss. You have advantage on Awareness checks to spot a hidden creature, and on Discernment checks to determine whether a creature is lying. Additionally, you can use your political sway to gain advantage on all Negotiation checks when you're dealing with law enforcement."
                            },
                            preemptiveStrike: {
                                name: "Preemptive Strike",
                                description: "Once per round, if a creature attempts to make an attack against you, you can immediately retaliate with a melee attack if you are within 5 feet of it. Your attack is made before the creature's attack."
                            },
                            stunningDefense: {
                                name: "Stunning Defense",
                                description: "Once per round, when a creature hits you with a melee or ranged attack, you can halve the attack's damage against you."
                            },
                            swordMastery: {
                                name: "Sword Mastery",
                                description: "Your skill with the nightblade has become such that it defies logic and reason. When attempting a melee attack with your nightblade, you ignore any damage reduction or immunity held by your target."
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
                        },
                        feats: {
                            fullMatrices: {
                                name: "Full Matrices",
                                description: "Your honed reflexes and uncanny sense of danger have saved you more than once. Once per round, when an attack hits you, make a Tumbling check, with a DC equal to the attack roll of your target. If you succeed, you take half damage, rather than full damage, from the attack."
                            },
                            knowledgeIsPower: {
                                name: "Knowledge is Power",
                                description: "You've had to study all manner of opponents to ensure your survival. Once per round, you can make a Negotiation check against a target's AC. If you succeed, you have advantage on attack rolls against that target until the beginning of your next turn."
                            },
                            revolutionaryConnections: {
                                name: "Revolutionary Connections",
                                description: "Your networking has made the most impossible of connections probable. Double your skill bonus for all Negotiation checks with factions for which you have at least Neutral standing."
                            },
                            secondChance: {
                                name: "Second Chance",
                                description: "Once per mission, if the damage from a creature's attack will reduce your hit points to 0 or below, reduce your hit points to 1 instead."
                            },
                            thousandYardStare: {
                                name: "Thousand Yard Stare",
                                description: "If you have advantage on a ranged attack, you can forgo the advantage to double your damage for that attack."
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
                        },
                        feats: {
                            deviousPrototype01: {
                                name: "Devious Prototype 0.1",
                                description: "You begin building the framework for a companion weapon, taking the form of a mobile turret, drone, or similar device. At the start of each mission, you can decide how you've modified your prototype by choosing between Assault, Defender, Explorer or Medical (consult the 'Devious Prototype' section on Page 36). The Devious Prototype can move and attack independently of its master, and can take basic actions on your behalf, such as delivering spells with the touch requirement. It has its own turn and actions, playing before or after you in the Initiative order. It can also transmit your voice and relay live and archived video footage to you. Unless indicated otherwise in its statblock, the Devious Prototype has an AC of 10, 10 hit points, and its own ability bonuses. Unless empowered by other spells, it can make a ranged attack once per round as a combat action. Its speed is indicated in its statblock, based on the type of prototype you choose."
                            },
                            deviousPrototype02: {
                                name: "Devious Prototype 0.2",
                                description: "Requirement: Devious Prototype 0.1 Work on your Devious Prototype has continued, increasing its AC to 12, hit points to 12, and it can attack twice when it takes a combat action."
                            },
                            deviousPrototype03: {
                                name: "Devious Prototype 0.3",
                                description: "Requirement: Devious Prototype 0.2 Your Devious Prototype is not yet market-ready but is quickly increasing in effectiveness. It now has an AC of 14, 14 hit points, and can attack twice when it takes a combat action. Additionally, its damage increases by an additional 1d4 for each attack."
                            },
                            juryRigging: {
                                name: "Jury-Rigging",
                                description: "Requirement: Devious Prototype 0.1 You are an expert at repurposing spare parts to repair your Devious Prototype. At the end of an encounter, if one or more artificial creatures were destroyed, excluding your Devious Prototype, you can use the remains to repair your Devious Prototype. It regains 1d4 + 4 hit points. Additionally, you gain advantage on all Hacking and Vehicles checks when attempting to repair a broken device.",
                            },
                            pinballWizard: {
                                name: "Pinball Wizard",
                                description: "Your constant tinkering with spells allows you to broaden their effectiveness once in a while. Once per round, you can add one target within range to any single-target Technomancy spell you cast, doubling the ceridium cost for that spell."
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
                        },
                        feats: {
                            arcaneWard: {
                                name: "Arcane Ward",
                                description: "Your understanding of magic allows you to better defend yourself against it. You gain advantage on checks made against spells and other magical effects."
                            },
                            holisticHealer: {
                                name: "Holistic Healer",
                                description: "Your intuitive understanding of all life grants you advantage on Healing checks, and you can add your Nature skill bonus to your Healing checks in addition to any other bonuses. Whenever you use a spell to restore hit points to a creature, the creature regains an additional 1d6 hit points."
                            },
                            reflectiveWard: {
                                name: "Reflective Ward",
                                description: "Prerequisite: Arcane Ward Once per round, when you are hit by a spell or ranged attack, you can make a Mancy check, with a DC equal to the result of the attack roll. If your check is successful, the attack is reflected back at the attacker as though it originated from you, turning the attacker into the target. The spell or ranged attack retains its initial attack roll."
                            },
                            strengthOfTheEarth: {
                                name: "Strength of the Earth",
                                description: "You’ve entrenched yourself into the natural world, occasionally being able to draw magic from the earth itself. When you cast a spell, roll a d6. On a 5 or higher, you regain the ceridium cost of the spell."
                            },
                            teamSpirit: {
                                name: "Team Spirit",
                                description: "You know from experience that while one wolf is scary, an entire wolf pack is terrifying. Once per round, when an ally within your range hits a target that you can see, you can make a ranged attack against the same target."
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
                        },
                        feats: {
                            compromisingStrike: {
                                name: "Compromising Strike",
                                description: "Your ability to utilize distractions allows you to deal more damage in melee combat. Add 1d8 damage to any melee attack performed against a target that is already engaged in melee combat with another character, or to any melee attack for which you have advantage, including attacks made from Stealth."
                            },
                            scoundrelsLuck: {
                                name: "Scoundrel's Luck",
                                description: "At the start of a mission, roll three d20s and record each result. Throughout the mission, you can replace any check made by you or a creature that you can see with one of these rolls. You must declare your intention to do so before the roll occurs, and you can replace a roll in this way only once per round. Each roll can only be used once."
                            },
                            shadowDealer: {
                                name: "Shadow Dealer",
                                description: "Your connections open doors that appear locked to others. Treat your faction standing with each faction as one level higher than your faction points would indicate, even if doing so grants you Allied faction standing with more than one faction."
                            },
                            sprintAttack: {
                                name: "Sprint Attack",
                                description: "When opportunity strikes, you're quick to comply. Once per round, you can take a double move action and still take a combat action."
                            },
                            unendingFlow: {
                                name: "Unending Flow",
                                description: "Requirement: Compromising Strike Wounds you inflict bleed profusely. When you deal Compromising Strike damage to an organic creature, it starts taking 1d6 damage at the beginning of each of its turns. At the end of each of its turns, it can spend a move action to attempt to staunch the flow by making a successful Healing check (DC 10). Multiple instances of Unending Flow are not cumulative."
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
            },
            updateFeat(featChoice) {
                this.featChoice = featChoice;
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
        margin-left: 100px;
        justify-content: center;
    }
    .archetypes-sub {
        display: inline-flex;
    }
    .feats-sub {
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
        #feats {
            margin: auto;
        }
        button {
            margin-left: 2.5px;
            margin-right: 2.5px;
        }
    }
</style>