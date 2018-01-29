import L from 'leaflet';
import jsonLoad from './jsonLoad.js';

const map = L.map('map').setView([29.6516, -82.3248], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYnJpemFuZHJldyIsImEiOiJjamQwa2pubTYwOTEzMnFwdmZoNTl4aWd5In0.cfLlYg3fXfBtKxADDSGKSw', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYnJpemFuZHJldyIsImEiOiJjamQwa2pubTYwOTEzMnFwdmZoNTl4aWd5In0.cfLlYg3fXfBtKxADDSGKSw'
}).addTo(map);

function getStyle(feature) {
    return {
        weight: 0.5,
        opacity: 1,
        color: 'black',
        fillOpacity: 0.8,
        fillColor: '#ccc'
    };
}

function onEachPrecinct(feature, layer) {
    layer.on({
        // mouseover: highlightFeature,
        // mouseout: resetHighlight,
        // click: selectFeature
    });
}

jsonLoad('./data/schools.json')
    .then((schools) => {
        L.geoJSON(schools, {
            style: getStyle,
        // onEachFeature: onEachPrecinct
        }).addTo(map);
    });
