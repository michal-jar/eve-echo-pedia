const app = Vue.createApp({
    data() {
        return {
            "search": "",
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
        newStargate(from, to) {
            this.systems.forEach(system => {
                if (system.name === from && system.stargates.indexOf(to) == -1 ) {
                    system.stargates.push(to)
                } else if (system.name === to && system.stargates.indexOf(from) == -1) {
                    system.stargates.push(from)
                }
            })
        }
    }
})
