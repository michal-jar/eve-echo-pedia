app.component('planet-details', {
    props: {
        planet: {
            type: Object,
            required: true
        }
    },
    template:
    /*html*/
    `<span>{{ planet.hasOwnProperty('name') ? planet.name : planet }}{{ planet.hasOwnProperty('subName') ? ' (' + planet.subName + ')' : '' }}</span><br/>
    <span>({{ planet.type }})</span>
    <ul>
        <li v-for="resource in planet.mining">
            <span>{{ resource.name }} - {{ resource.quality }}</span>
        </li>
    </ul>`
})
