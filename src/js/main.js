import L from 'leaflet';
import jsonLoad from './jsonLoad.js';
import createElement from './createElement.js';

const app = {
    // constants
    DATA_POINTS: [
        'name'
    ],

    // Set up the app
    boot: function(){
        this.zoneData = document.querySelector('#zone-data');
        this.districtData = document.querySelector('#district-data');
        this.data = {};

        this.map = L.map('map').setView([29.6516, -82.3248], 8);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJpemFuZHJldyIsImEiOiJjamQwa2pubTYwOTEzMnFwdmZoNTl4aWd5In0.cfLlYg3fXfBtKxADDSGKSw', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiYnJpemFuZHJldyIsImEiOiJjamQwa2pubTYwOTEzMnFwdmZoNTl4aWd5In0.cfLlYg3fXfBtKxADDSGKSw'
        }).addTo(this.map);

        jsonLoad('./data/schools.json')
            .then((schools) => {
                app.data.schools = schools;
                L.geoJSON(schools, {
                    style: getZoneStyle,
                    onEachFeature: onEachZone
                }).addTo(this.map);
            });
    },
};

// Get the style of each zone
function getZoneStyle(feature){
    return {
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.8,
        fillColor: '#ccc'
    };
}

// Handle interactivity for each zone
function onEachZone(feature, layer){
    layer.on({
        // mouseover: highlightFeature,
        // mouseout: resetHighlight,
        click: fillZoneData
    });
}

// Fill in zone context data
function fillZoneData(e){
    let html = '<ul>';

    for (let point of app.DATA_POINTS) {
        html += `<li class="zone-data-point">${point}: ${e.target.feature.properties[point]}</li>`;
    }

    html += '</ul>';

    app.zoneData.innerHTML = html;
}

app.boot();
window.app = app;
