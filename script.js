mapboxgl.accessToken = 'pk.eyJ1IjoiamFpc29ua2E5MSIsImEiOiJoS2paMDBvIn0.4sk6UGzBq1-ujzJeDG_GdQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jaisonka91/cil27f85w00e9c9m326d2hjle',
    center: [77.6128582, 12.9368892],
    zoom: 5 
});
map.on('style.load', function () {
    map.addSource("markers", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [77.6128582, 12.9368892]
                },
                "properties": {
                    "title": "I'm here",
                    "marker-color": "#63b6e5",
			      	"marker-size": "large",
			      	"marker-symbol": "rocket"
                }
            }]
        }
    });

    map.addLayer({
        "id": "markers",
        "type": "symbol",
        "source": "markers",
        "layout": {
            "icon-image": "{marker-symbol}-15",
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
        }
    });
});