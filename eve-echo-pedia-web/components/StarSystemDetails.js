app.component('star-system-details', {
    props: {
        system: {
            type: Object,
            required: true
        }
    },
    emits: ['newStargate'],
    template:
    /*html*/
    `<span>{{ system.name }} ({{ system.securityLevel }})</span>
    <ul>
        <li>
            <span @click="select('stargates')">Stargates: {{ system.stargates.length }}</span>
            <ul v-if="selected === 'stargates'">
                <li v-for="stargate in system.stargates">
                    <span>{{ stargate }}</span>
                </li>
                <li>
                    <input v-model="newStargate" placeholder="System name"/><button @click="addStargate">Add</button>
                </li>
            </ul>
        </li>
        <li>
            <span @click="select('planets')">Planets: {{ system.planets.length }}</span>
            <ul v-if="selected === 'planets'">
                <li v-for="planet in system.planets">
                    <planet-details :planet="planet"/>
                </li>
            </ul>
        </li>
        <li>
            <span>Stations: {{ system.stations }} {{ system.stations > 0 && system.interstellarTradingCenter ? '(ITC)' : '' }}</span>
        </li>
        <li>
            <span>Mining: {{ system.miningLevel > 0 ? system.miningLevel : 'no mining' }}</span>
        </li>
        <li>
            <span>Cosmic Anomaly: {{ system.cosmicAnomaliesLevel > 0 ? system.cosmicAnomaliesLevel : 'no anomalies' }}</span>
        </li>
    </ul>`,
    data() {
        return {
            "selected": "",
            "newStargate": ""
        }
    },
    methods: {
        select(selection) {
            if (this.selected === selection) {
                this.selected = ''
            } else {
                this.selected = selection
            }
        },
        addStargate() {
            if (this.newStargate.trim().length > 0) {
                this.$emit("newStargate", this.system.name, this.newStargate.trim())
                this.newStargate = ""
            }
        }
    }
})
