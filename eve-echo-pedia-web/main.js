const app = Vue.createApp({
    data() {
        return {
            "search": "",
            "newSystemName": "",
            "newSystemSecurityLevel": "",
            "systems": [
                {
                    "name": "Pator",
                    "securityLevel": 1.0,
                    "miningLevel": 0,
                    "cosmicAnomaliesLevel" : 0,
                    "stations": 5,
                    "interstellarTradingCenter": true,
                    "planets": [
                        {
                            "name": "Pator I",
                            "subName": "Istinn",
                            "type": "Lava Plannet",
                            "mining": [
                                {
                                    "name": "Molten Compound",
                                    "quality": "Perfect"
                                },
                                {
                                    "name": "Polyaramids",
                                    "quality": "Medium"
                                }
                            ]
                        },
                        {
                            "name": "Pator II",
                            "subName": "Belogor",
                            "type": "Barren Planet",
                            "mining": [
                                {
                                    "name": "Lustering Alloy",
                                    "quality": "Medium"
                                },
                                {
                                    "name": "Base Metals",
                                    "quality": "Poor"
                                }
                            ]
                        },
                        {
                            "name": "Pator III",
                            "subName": "Huggar",
                            "type": "Temperate Planet",
                            "mining": [
                                {
                                    "name": "Industial Fibers",
                                    "quality": "Rich"
                                },
                                {
                                    "name": "Condensates",
                                    "quality": "Rich"
                                },
                                {
                                    "name": "Heavy Watter",
                                    "quality": "Rich"
                                }
                            ]
                        },
                        {
                            "name": "Pator IV",
                            "subName": "Matar",
                            "type": "Temperate Planet",
                            "mining": [
                                {
                                    "name": "Condensed Alloy",
                                    "quality": "Medium"
                                },
                                {
                                    "name": "Noble Metals",
                                    "quality": "Medium"
                                },
                                {
                                    "name": "Heavy Watter",
                                    "quality": "Rich"
                                }
                            ]
                        },
                        {
                            "name": "Pator V",
                            "subName": "Vakir",
                            "type": "Storm Planet",
                            "mining": [
                                {
                                    "name": "Reactive Metals",
                                    "quality": "Medium"
                                },
                                {
                                    "name": "Suspended Plasma",
                                    "quality": "Medium"
                                }
                            ]
                        },
                        {
                            "name": "Pator VI",
                            "subName": "Varkal",
                            "type": "Barren Planet",
                            "mining": [
                                {
                                    "name": "Lustering Alloy",
                                    "quality": "Poor"
                                },
                                {
                                    "name": "Base Metals",
                                    "quality": "Poor"
                                }
                            ]
                        },
                        {
                            "name": "Pator VII",
                            "subName": "Kulheim",
                            "type": "Barren Planet",
                            "mining": [
                                {
                                    "name": "Lustering Alloy",
                                    "quality": "Poor"
                                },
                                {
                                    "name": "Base Metals",
                                    "quality": "Poor"
                                }
                            ]
                        },
                        {
                            "name": "Pator VIII",
                            "subName": "Orinn",
                            "type": "Storm Planet",
                            "mining": [
                                {
                                    "name": "Suspended Plasma",
                                    "quality": "Medium"
                                },
                                {
                                    "name": "Oxygen Isotopes",
                                    "quality": "Poor"
                                }
                            ]
                        },
                        {
                            "name": "Pator IX",
                            "subName": "Syld",
                            "type": "Oceanic Planet",
                            "mining": [
                                {
                                    "name": "Condensed Alloy",
                                    "quality": "Rich"
                                },
                                {
                                    "name": "Polyaramids",
                                    "quality": "Rich"
                                },
                                {
                                    "name": "Heavy Watter",
                                    "quality": "Poor"
                                }
                            ]
                        }
                    ],
                    "stargates": [ "Onga", "Lustervik", "Ammold", "Eystur" ]
                },
                {
                    "name": "Dammalin",
                    "securityLevel": 0.5,
                    "miningLevel": 4,
                    "cosmicAnomaliesLevel" : 4,
                    "stations": 3,
                    "interstellarTradingCenter": false,
                    "planets": [ "Dammalin I", "Dammalin II" ],
                    "stargates": [ "Alakgur", "Bosboger", "Oifeim" ]
                }
            ]
        }
    },
    computed: {
        systemsToDisplay() {
            return this.systems.filter(system => this.search === '' || system.name.toUpperCase().search(this.search.toUpperCase()) > -1 )
        }
    },
    methods: {
        addSystem() {
            if (this.newSystemName.trim().length > 0 && /^[-]?[01][.,]\d$/.test(this.newSystemSecurityLevel)) {
                this.systems.push({
                    "name": this.newSystemName,
                    "securityLevel": parseFloat(this.newSystemSecurityLevel),
                    "miningLevel": undefined,
                    "cosmicAnomaliesLevel" : undefined,
                    "stations": undefined,
                    "interstellarTradingCenter": false,
                    "planets": [],
                    "stargates": []
                })
                this.newSystemName = ""
                this.newSystemSecurityLevel = ""
            }
        },
        removeSystem(name) {
            const index = this.systems.findIndex(system => system.name === name)
            if (index > -1) {
                this.systems.splice(index, 1)
            }
            this.systems.forEach(system => {
                const index = system.stargates.indexOf(name)
                if (index > -1 ) {
                    system.stargates.splice(index, 1)
                }
            })
        },
        addStargate(from, to) {
            this.systems.forEach(system => {
                if (system.name === from && system.stargates.indexOf(to) == -1 ) {
                    system.stargates.push(to)
                } else if (system.name === to && system.stargates.indexOf(from) == -1) {
                    system.stargates.push(from)
                }
            })
        },
        removeStargate(from, to) {
            this.systems.forEach(system => {
                if (system.name === from) {
                    const index = system.stargates.indexOf(to)
                    if (index > -1 ) {
                        system.stargates.splice(index, 1)
                    }
                } else if (system.name === to) {
                    const index = system.stargates.indexOf(from)
                    if (index > -1 ) {
                        system.stargates.splice(index, 1)
                    }
                }
            })
        }
    }
})
