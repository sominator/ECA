<template>
    <div>
        <h2>Character Generator</h2>
        <div id="char-display">
            <p>Your Race: {{raceChoice}}</p>
            <p>Your Class: {{classChoice}}</p>
            <p>Your Archetype: {{archetypeChoice}}</p>
            <p>Your Feats: {{featChoice}}</p>
            <p>Your Talents/Spells: {{talentChoice}}</p>
        </div>
        <div id="buttons">
            <button v-on:click="toggle = 'races'">Choose Race</button>
            <button v-on:click="toggle = 'classes'">Choose Class</button>
            <button v-on:click="toggle = 'archetypes'">Choose Archetype</button>
            <button v-on:click="toggle = 'feats'">Choose Feats</button>
            <button v-on:click="toggle = 'talents'">Choose Talents/Spells</button>
        </div>
        <div id="char-gen">
            <div id="races" v-show="toggle === 'races'">
                <Race v-for="race in raceData" :raceData="race" :key="race.name" :raceChoice="raceChoice" @raceChosen="updateRace" />
            </div>
            <div id="classes" v-show="toggle === 'classes'">
                <Class v-for="charClass in classData" :classData="charClass" :key="charClass.name" :classChoice="classChoice" @classChosen="updateClass" />
            </div>
            <div id="archetypes" v-show="toggle === 'archetypes'">
                <h3 v-show="classChoice === ''">Choose a class to determine your archetype.</h3>
                <div class="archetypes-sub" v-show="classChoice === 'NIGHT Agent'">
                    <Archetype v-for="archetype in classData.nightAgent.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="classChoice === 'Revolutionary'">
                    <Archetype v-for="archetype in classData.revolutionary.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="classChoice === 'Technomancer'">
                    <Archetype v-for="archetype in classData.technomancer.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="classChoice === 'Terramancer'">
                    <Archetype v-for="archetype in classData.terramancer.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
                <div class="archetypes-sub" v-show="classChoice === 'Vanguard'">
                    <Archetype v-for="archetype in classData.vanguard.archetypes" :archetypeData="archetype" :key="archetype.name" :archetypeChoice="archetypeChoice" @archetypeChosen="updateArchetype" />
                </div>
            </div>
            <div id="feats" v-show="toggle === 'feats'">
                <h3 v-show="classChoice === ''">Choose a class to determine your feats.</h3>
                <div class="feats-sub" v-show="classChoice === 'NIGHT Agent'">
                    <Feat v-for="feat in classData.nightAgent.feats" :featData="feat" :key="feat.name" :featChoice="featChoice" @featChosen="updateFeat" />
                </div>
                <div class="feats-sub" v-show="classChoice === 'Revolutionary'">
                    <Feat v-for="feat in classData.revolutionary.feats" :featData="feat" :key="feat.name" :featChoice="featChoice" @featChosen="updateFeat" />
                </div>
                <div class="feats-sub" v-show="classChoice === 'Technomancer'">
                    <Feat v-for="feat in classData.technomancer.feats" :featData="feat" :key="feat.name" :featChoice="featChoice" @featChosen="updateFeat" />
                </div>
                <div class="feats-sub" v-show="classChoice === 'Terramancer'">
                    <Feat v-for="feat in classData.terramancer.feats" :featData="feat" :key="feat.name" :featChoice="featChoice" @featChosen="updateFeat" />
                </div>
                <div class="feats-sub" v-show="classChoice === 'Vanguard'">
                    <Feat v-for="feat in classData.vanguard.feats" :featData="feat" :key="feat.name" :featChoice="featChoice" @featChosen="updateFeat" />
                </div>
            </div>
            <div id="talents" v-show="toggle === 'talents'">
                <h3 v-show="archetypeChoice === '' || archetypeChoice === ' '">Choose an archetype to determine your talents/spells.</h3>
                <div class="talents-sub" v-show="archetypeChoice === 'Nightpath'">
                    <Spell v-for="spell in classData.nightAgent.archetypes.nightpath.spells" :spellData="spell" :key="spell.name" :talentChoice="talentChoice" @talentChosen="updateTalent" />
                </div>
                <div class="talents-sub" v-show="archetypeChoice === 'Gunslinger'">
                    <Talent v-for="talent in classData.revolutionary.archetypes.gunslinger.talents" :talentData="talent" :key="talent.name" :talentChoice="talentChoice" @talentChosen="updateTalent" />
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
        props: {

        },
        data: function () {
            return {
                toggle: "",
                raceChoice: "",
                classChoice: "",
                archetypeChoice: "",
                featChoice: "",
                talentChoice: "",
                classData: {
                    nightAgent: {
                        name: "NIGHT Agent",
                        description: "NIGHT Agents are special agents of the highest order, members of a paramilitary force that is called upon to enforce peace among aurics and humans - sometimes using extreme measures. As a NIGHT Agent, you're skilled in espionage and magical combat, and will have to decide between the paths of shadowmancy and photomancy for your archetype.",
                        skills: "Athletics, Grappling, Mancy, Stealth, Tumbling",
                        image: 'NightAgent.png',
                        archetypes: {
                            nightpath: {
                                name: "Nightpath",
                                description: "Master of shadow.",
                                spells: {
                                    cloakOfShadows: {
                                        name: "Cloak of Shadows",
                                        action: "Move action",
                                        range: "Self",
                                        duration: "1 encounter",
                                        ceridium: "2",
                                        description: "Cloak yourself in shadows, adding +5 to all Stealth skill checks. Hostile creatures within 10 feet of you incur disadvantage on all attack rolls"
                                    },
                                    doubleTrouble: {
                                        name: "Double Trouble",
                                        action: "Move action",
                                        range: "Self",
                                        duration: "1 encounter",
                                        ceridium: "2",
                                        description: "Create a carbon copy of yourself that has 10 HP and appears adjacent to you. When an attack hits you, the attacker must succeed at a DC 15 Awareness skill check; otherwise, the attack hits your doppelganger instead."
                                    },
                                    oneWithShadows: {
                                        name: "One with Shadows",
                                        action: "Move action",
                                        range: "Self",
                                        duration: "1 round, until the beginning of your next turn",
                                        ceridium: "1",
                                        description: "You become the darkness and take a nonmaterial form. While in this form you cannot make attacks, but are immune to damage and can pass through cracks big enough for your two-dimensional form. If you reform in a space too narrow for your body, you reappear instead in the nearest unoccupied space, taking 1d6 damage per 5 feet traveled."
                                    },
                                    shadowBolt: {
                                        name: "Shadow Bolt",
                                        action: "Combat action",
                                        range: "120 feet",
                                        duration: "N/A",
                                        ceridium: "2",
                                        description: "Fire a shadow arrow at one creature within 120 feet, making a spell attack. If it hits, it deals 2d6 damage, and you can teleport to an unoccupied space that you can see within 5 feet of the target."
                                    },
                                    shadowSiphon: {
                                        name: "Shadow Siphon",
                                        action: "Move action",
                                        range: "Melee attack",
                                        duration: "1 encounter",
                                        ceridium: "2",
                                        description: "You empower your nightblade with insatiable darkness. You deal 1d6 extra damage with your melee attack. You regain an amount of hit points equal to the extra damage you do."
                                    }
                                }
                            },
                            daypath: {
                                name: "Daypath",
                                description: "Master of light."
                            }
                        },
                        feats: {
                            intoTheFray: {
                                name: "Into the Fray",
                                requirement: "None",
                                description: "When you take two move actions during your turn, you can attempt a melee attack if you end your second move action within 5 feet of a creature."
                            },
                            nightTraining: {
                                name: "NIGHT Training",
                                requirement: "None",
                                description: "Your deeds and training in the NIGHT organization have gained you a certain political cachet and allow you to pick up cues that most would miss. You have advantage on Awareness checks to spot a hidden creature, and on Discernment checks to determine whether a creature is lying. Additionally, you can use your political sway to gain advantage on all Negotiation checks when you're dealing with law enforcement."
                            },
                            preemptiveStrike: {
                                name: "Preemptive Strike",
                                requirement: "None",
                                description: "Once per round, if a creature attempts to make an attack against you, you can immediately retaliate with a melee attack if you are within 5 feet of it. Your attack is made before the creature's attack."
                            },
                            stunningDefense: {
                                name: "Stunning Defense",
                                requirement: "None",
                                description: "Once per round, when a creature hits you with a melee or ranged attack, you can halve the attack's damage against you."
                            },
                            swordMastery: {
                                name: "Sword Mastery",
                                requirement: "None",
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
                                description: "Master of dual pistols.",
                                talents: {
                                    doubleShot: {
                                        name: "Double Shot",
                                        requirement: "None",
                                        description: "Once per round, roll a 1d6. If the result is a 5 or higher, you can make an additional ranged attack this turn."
                                    },
                                    highNoon: {
                                        name: "High Noon",
                                        requirement: "None",
                                        description: "Once per round, if one of your ranged attacks hits a target, and there is another target adjacent to the first one that you can see, you can make a separate ranged attack against the second target."
                                    },
                                    privateEscort: {
                                        name: "Private Escort",
                                        requirement: "None",
                                        description: "You gain a +5 bonus on Vehicles skill checks when traveling with at least one more passenger. Additionally, once per round, if you or one of your passengers is hit by a ranged attack, you can make a Vehicles check (DC 10 or at the GM’s discretion). If you succeed, halve the attack’s damage."
                                    },
                                    quickDraw: {
                                        name: "Quick Draw",
                                        requirement: "None",
                                        description: "Your ranged attacks have advantage against targets against which you have a higher Initiative."
                                    },
                                    runAndGun: {
                                        name: "Run and Gun",
                                        requirement: "None",
                                        description: "There’s always room for acrobatics, especially during a firefight. Once per round, you can attempt a Tumbling check (DC 10 or at the GM’s discretion) to combine a move action with a ranged attack. On a success, you can take an extra move action after your ranged attack. On a failure, you spend your move action as you normally would."
                                    }
                                }
                            },
                            sharpshooter: {
                                name: "Sharpshooter",
                                description: "Master of sniping."
                            }
                        },
                        feats: {
                            fullMatrices: {
                                name: "Full Matrices",
                                requirement: "None",
                                description: "Your honed reflexes and uncanny sense of danger have saved you more than once. Once per round, when an attack hits you, make a Tumbling check, with a DC equal to the attack roll of your target. If you succeed, you take half damage, rather than full damage, from the attack."
                            },
                            knowledgeIsPower: {
                                name: "Knowledge is Power",
                                requirement: "None",
                                description: "You've had to study all manner of opponents to ensure your survival. Once per round, you can make a Negotiation check against a target's AC. If you succeed, you have advantage on attack rolls against that target until the beginning of your next turn."
                            },
                            revolutionaryConnections: {
                                name: "Revolutionary Connections",
                                requirement: "None",
                                description: "Your networking has made the most impossible of connections probable. Double your skill bonus for all Negotiation checks with factions for which you have at least Neutral standing."
                            },
                            secondChance: {
                                name: "Second Chance",
                                requirement: "None",
                                description: "Once per mission, if the damage from a creature's attack will reduce your hit points to 0 or below, reduce your hit points to 1 instead."
                            },
                            thousandYardStare: {
                                name: "Thousand Yard Stare",
                                requirement: "None",
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
                                requirement: "None",
                                description: "You begin building the framework for a companion weapon, taking the form of a mobile turret, drone, or similar device. At the start of each mission, you can decide how you've modified your prototype by choosing between Assault, Defender, Explorer or Medical (consult the 'Devious Prototype' section on Page 36). The Devious Prototype can move and attack independently of its master, and can take basic actions on your behalf, such as delivering spells with the touch requirement. It has its own turn and actions, playing before or after you in the Initiative order. It can also transmit your voice and relay live and archived video footage to you. Unless indicated otherwise in its statblock, the Devious Prototype has an AC of 10, 10 hit points, and its own ability bonuses. Unless empowered by other spells, it can make a ranged attack once per round as a combat action. Its speed is indicated in its statblock, based on the type of prototype you choose."
                            },
                            deviousPrototype02: {
                                name: "Devious Prototype 0.2",
                                requirement: "Devious Prototype 0.1",
                                description: "Work on your Devious Prototype has continued, increasing its AC to 12, hit points to 12, and it can attack twice when it takes a combat action."
                            },
                            deviousPrototype03: {
                                name: "Devious Prototype 0.3",
                                requirement: "Devious Prototype 0.2",
                                description: "Your Devious Prototype is not yet market-ready but is quickly increasing in effectiveness. It now has an AC of 14, 14 hit points, and can attack twice when it takes a combat action. Additionally, its damage increases by an additional 1d4 for each attack."
                            },
                            juryRigging: {
                                name: "Jury-Rigging",
                                requirement: "Devious Prototype 0.1",
                                description: "You are an expert at repurposing spare parts to repair your Devious Prototype. At the end of an encounter, if one or more artificial creatures were destroyed, excluding your Devious Prototype, you can use the remains to repair your Devious Prototype. It regains 1d4 + 4 hit points. Additionally, you gain advantage on all Hacking and Vehicles checks when attempting to repair a broken device.",
                            },
                            pinballWizard: {
                                name: "Pinball Wizard",
                                requirement: "None",
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
                                requirement: "None",
                                description: "Your understanding of magic allows you to better defend yourself against it. You gain advantage on checks made against spells and other magical effects."
                            },
                            holisticHealer: {
                                name: "Holistic Healer",
                                requirement: "None",
                                description: "Your intuitive understanding of all life grants you advantage on Healing checks, and you can add your Nature skill bonus to your Healing checks in addition to any other bonuses. Whenever you use a spell to restore hit points to a creature, the creature regains an additional 1d6 hit points."
                            },
                            reflectiveWard: {
                                name: "Reflective Ward",
                                requirement: "Arcane Ward",
                                description: "Once per round, when you are hit by a spell or ranged attack, you can make a Mancy check, with a DC equal to the result of the attack roll. If your check is successful, the attack is reflected back at the attacker as though it originated from you, turning the attacker into the target. The spell or ranged attack retains its initial attack roll."
                            },
                            strengthOfTheEarth: {
                                name: "Strength of the Earth",
                                requirement: "None",
                                description: "You've entrenched yourself into the natural world, occasionally being able to draw magic from the earth itself. When you cast a spell, roll a d6. On a 5 or higher, you regain the ceridium cost of the spell."
                            },
                            teamSpirit: {
                                name: "Team Spirit",
                                requirement: "None",
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
                                requirement: "None",
                                description: "Your ability to utilize distractions allows you to deal more damage in melee combat. Add 1d8 damage to any melee attack performed against a target that is already engaged in melee combat with another character, or to any melee attack for which you have advantage, including attacks made from Stealth."
                            },
                            scoundrelsLuck: {
                                name: "Scoundrel's Luck",
                                requirement: "None",
                                description: "At the start of a mission, roll three d20s and record each result. Throughout the mission, you can replace any check made by you or a creature that you can see with one of these rolls. You must declare your intention to do so before the roll occurs, and you can replace a roll in this way only once per round. Each roll can only be used once."
                            },
                            shadowDealer: {
                                name: "Shadow Dealer",
                                requirement: "None",
                                description: "Your connections open doors that appear locked to others. Treat your faction standing with each faction as one level higher than your faction points would indicate, even if doing so grants you Allied faction standing with more than one faction."
                            },
                            sprintAttack: {
                                name: "Sprint Attack",
                                requirement: "None",
                                description: "When opportunity strikes, you're quick to comply. Once per round, you can take a double move action and still take a combat action."
                            },
                            unendingFlow: {
                                name: "Unending Flow",
                                requirement: "Compromising Strike",
                                description: "Wounds you inflict bleed profusely. When you deal Compromising Strike damage to an organic creature, it starts taking 1d6 damage at the beginning of each of its turns. At the end of each of its turns, it can spend a move action to attempt to staunch the flow by making a successful Healing check (DC 10). Multiple instances of Unending Flow are not cumulative."
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
                    this.featChoice = " ";
                    this.talentChoice = " ";
                }
            },
            updateArchetype(archetypeChoice) {
                this.archetypeChoice = archetypeChoice;
            },
            updateFeat(featChoice) {
                this.featChoice = featChoice;
            },
            updateTalent(talentChoice) {
                this.talentChoice = talentChoice;
            },
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