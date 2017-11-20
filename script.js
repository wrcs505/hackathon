// var L = require('leaflet')
// var markers = require('./markers.json');
// markers =
var markers = [
   {
     "name": "Chattooga River",
     "url": "https://en.wikipedia.org/wiki/Chattooga_River",
     "lat": 34.790334,
     "lng": -83.248043
   },
   {
     "name": "Cheat River",
     "url": "https://en.wikipedia.org/wiki/Cheat_River",
     "lat": 39.498719,
     "lng": -79.642876
   },
   {
     "name": "French Broad",
     "url": "https://en.wikipedia.org/wiki/French_Broad_River",
     "lat": 35.816248,
     "lng": -82.703258
   },
   {
     "name": "Gauley River",
     "url": "https://en.wikipedia.org/wiki/Gauley_River",
     "lat": 38.075627,
     "lng": -81.067216
   },
   {
     "name": "Green River",
     "url": "https://en.wikipedia.org/wiki/Green_River_(North_Carolina)",
     "lat": 35.235312,
     "lng": -82.346510
   },
   {
     "name": "James River",
     "url": "https://en.wikipedia.org/wiki/James_River",
     "lat": 37.798397,
     "lng": -78.491133
   },
    {
     "name": "New River",
     "url": "https://en.wikipedia.org/wiki/New_River_(Kanawha_River)",
     "lat": 38.050325,
     "lng": -81.113671
   },
   {
     "name": "Watauga River",
     "url": "https://en.wikipedia.org/wiki/Watauga_River",
     "lat": 36.363999,
     "lng": -82.174219
   },
 {
     "name": "Nantahala River",
     "url": "https://en.wikipedia.org/wiki/Nantahala_River",
     "lat": 35.332897,
     "lng": -83.585300
   },
 {
     "name": "Ocoee River",
     "url": "https://en.wikipedia.org/wiki/Ocoee_River",
     "lat": 35.035675,
     "lng":-84.429096
   },
 {
     "name": "Pigeon River",
     "url": "https://en.wikipedia.org/wiki/Pigeon_River_(Tennessee_%E2%80%93_North_Carolina)",
     "lat": 35.819364,
     "lng": -83.146739
   },
 {
     "name": "Russel Fork",
     "url": "https://en.wikipedia.org/wiki/Russell_Fork",
     "lat": 37.286290,
     "lng": -82.293531
   }


];


var mapid = L.map('mapid',{
  center: [35.621582, -82.595215],
  zoom: 6
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapid);

// var myURL = jQuery( 'script[src$="script.js"]' ).attr( 'src' ).replace( 'script.js', '' )

var myIcon = L.icon({
  // iconUrl: myURL + 'images/rafting-md.png',
  // iconRetinaUrl: myURL + 'rafting-md.png',
  iconUrl: "https://pbs.twimg.com/profile_images/566376866856984577/gq-rv7tL_400x400.png",
  // iconRetinaUrl:
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

for ( var i=0; i < markers.length; ++i )
{
 L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
  .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
  .addTo( mapid );
}


