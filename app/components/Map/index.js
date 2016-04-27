import React from 'react'
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'
import style from './style'
import L from 'leaflet'

const renderMap = function() {
  let drawControl, drawnItems, mmap, geocoder, info, featureGroup

  mmap = L.map('map')

  L.tileLayer('https://{s}.tiles.mapbox.com/v4/samcorcos.mhkh8fg3/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2FtY29yY29zIiwiYSI6IndLY0ZELUkifQ.HaLwwzHXtbi6XX8WBIVNwQ',{
    attribution: '<a href="http://osm.org/copyright">&copy; Mapbox &copy; OpenStreetMap</a> - <a href="https://www.mapbox.com/map-feedback/">Improve this map</a>'
  }).addTo(mmap);

  L.control.scale().addTo(mmap);

  featureGroup = new L.FeatureGroup();
  mmap.addLayer(featureGroup);

  // drawControl = new L.Control.Draw({
  //   draw: {
  //       polygon: false,
  //       polyline: false,
  //       rectangle: true,
  //       circle: false,
  //       marker: false
  //     }
  // });
  //
  // mmap.addControl(drawControl);

  // geocoder = L.Control.geocoder({
  //   position:'topleft',
  //   geocoder: new L.Control.Geocoder.Google('AIzaSyAgEOKzHfa_G7b_juhZjAgxDsfppLqknqU')
  // }).addTo(mmap);

  // function showPolygonAreaEdited(e) {
  //   coords = {
  //       lon1: normalizeLon(featureGroup.toGeoJSON().features[0].geometry.coordinates[0][1][0]),
  //       lat1: normalizeLat(featureGroup.toGeoJSON().features[0].geometry.coordinates[0][1][1]),
  //       lon2: normalizeLon(featureGroup.toGeoJSON().features[0].geometry.coordinates[0][3][0]),
  //       lat2: normalizeLat(featureGroup.toGeoJSON().features[0].geometry.coordinates[0][3][1])
  //   }
  //   coordsControl.update(coords);
  // }

  // function showPolygonArea(e) {
  //   coords = {
  //       lon1: normalizeLon(e.layer.toGeoJSON().geometry.coordinates[0][1][0]),
  //       lat1: normalizeLat(e.layer.toGeoJSON().geometry.coordinates[0][1][1]),
  //       lon2: normalizeLon(e.layer.toGeoJSON().geometry.coordinates[0][3][0]),
  //       lat2: normalizeLat(e.layer.toGeoJSON().geometry.coordinates[0][3][1])
  //   }
  //
  //   featureGroup.clearLayers();
  //   featureGroup.addLayer(e.layer);
  //   e.layer.openPopup();
  //
  //   coordsControl.update(coords);
  //
  //   editAction = new L.EditToolbar.Edit(mmap, {
  //       featureGroup: featureGroup
  //   })
  //   editAction.enable()
  //
  //   $('.leaflet-marker-icon').mouseup(
  //     function() {
  //       editAction.save()
  //     }
  //   );
  // }

  // mmap.on('draw:created', showPolygonArea);
  // mmap.on('draw:edited', showPolygonAreaEdited);

  // coordsControl = L.control({position: 'bottomright'});

  // coordsControl.onAdd = function (map) {
  //   this._div = L.DomUtil.create('div', 'map-legends');
  //   coords = {
  //     lat1: "",
  //     lon1: "",
  //     lat2: "",
  //     lon2: ""
  //   }
  //   this.update(coords);
  //   return this._div;
  // }

  // coordsControl.update = function (coords) {
  //   let disabledButton = coords.lat1 ? "": "disabled";
  //   let htmlSnippet = '<div class="map-legend wax-legend container-fluid">\
  //     <strong>Selected boundaries</strong>\
  //   <div class="legend clearfix">\
  //       <label>lat1: %(lon1)s</label>\
  //   </div>\
  //   <div class="legend clearfix">\
  //       <label>lon1: %(lat1)s</label>\
  //   </div>\
  //   <div class="legend clearfix">\
  //       <label>lat2: %(lon2)s</label>\
  //   </div>\
  //   <div class="legend clearfix">\
  //       <label>lon2: %(lat2)s</label>\
  //   </div>\
  //   <button class="btn waves-effect waves-light" style="width: 100%%;" id="generate_data" '+disabledButton+'>generate 3D model</button>\
  //   </div>';
  //   this._div.innerHTML = sprintf(htmlSnippet, coords);
  // };

  // coordsControl.addTo(mmap);

  // info = L.control({position: 'topright'});
  // info.onAdd = function () {
  //   this._div = L.DomUtil.create('div', 'info');
  //   this.update();
  //   return this._div;
  // };
  // info.update = function () {
  //   this._div.innerHTML = '<button id="start-tutorial" class="waves-effect waves-light btn">start tutorial</button>';
  // };
  // info.addTo(mmap);

  mmap.on('load', function() {
    // if (!Meteor.user() && !Meteor.loggingIn()) {
    //   startIntro();
    // }
    console.log("Map has successfully loaded.");
  })

  mmap.setView([39, -100], 5);
}

export class Map extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    renderMap()
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default CSSModules(Map, style)
