import React, { Component } from 'react';
import { Map, TileLayer, ScaleControl, Polygon, Marker, Popup, Polyline } from 'react-leaflet';
import 'react-leaflet-markercluster/dist/styles.min.css';
import './marker-cluster.css'
import L from 'leaflet';
import MarkerClusterGroup from './MarkerCluster.js';


const SSIFWCmarker = new L.Icon({
    iconUrl: require('../assets/favicon-32x32.png'),
    iconRetinaUrl: require('../assets/favicon-32x32.png'),
    iconSize: new L.Point(32, 32),
});

const wellsMarker = new L.Icon({
    iconUrl: require('../assets/waterwellsicon.png'),
    iconRetinaUrl: require('../assets/waterwellsicon.png'),
    iconSize: new L.Point(20, 20),
});

const springsMarker = new L.Icon({
    iconUrl: require('../assets/springsicon.png'),
    iconRetinaUrl: require('../assets/springsicon.png'),
    iconSize: new L.Point(20, 20),
});


const createCustomObservationsClusterIcon = function (cluster) {
    return L.divIcon({
        html: "<div><span>" + cluster.getChildCount() + "</span></div>",
        className: "leaflet-marker-icon marker-cluster-ssifwc marker-cluster-deepskyblue leaflet-zoom-animated leaflet-interactive",
    });
}

const createCustomWellClusterIcon = function (cluster) {
    return L.divIcon({
        html: "<div><span>" + cluster.getChildCount() + "</span></div>",
        className: "leaflet-marker-icon marker-cluster-ssifwc marker-cluster-dodgerblue leaflet-zoom-animated leaflet-interactive",
    });
}

const createCustomSpringClusterIcon = function (cluster) {
    return L.divIcon({
        html: "<div><span>" + cluster.getChildCount() + "</span></div>",
        className: "leaflet-marker-icon marker-cluster-ssifwc marker-cluster-royalblue leaflet-zoom-animated leaflet-interactive",
    });
}


class MapView extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
      center: props.center, 
      zoom: props.zoom,
        maxClusterRadius: props.maxClusterRadius,
      polygons: [],
      points: [],
      lines: [],
      tileURL: props.tileURL,
      attribution: props.attribution
    };
  }

  componentDidMount() {
    this.setState({
      zoom: this.state.zoom + 1
    })
  }

  UNSAFE_componentWillReceiveProps(props) {

    if (props.polygons !== this.state.polygons) {
      this.setState({ polygons: props.polygons });
    }
    if (props.points !== this.state.points) {
      this.setState({ points: props.points})
    }
    if (props.lines !== this.state.lines) {
      this.setState({ lines: props.lines})
    }

    this.setState({
      center: props.center,
      zoom: props.zoom,
      tileURL: props.tileURL,
      attribution: props.attribution,
    })

      this.leafletMap.leafletElement.invalidateSize();
  }

    render() {
    return (
      <Map id="map-component"
          ref={ (m) => this.leafletMap = m }
          center={ this.state.center } 
          zoom={ this.state.zoom }
           maxZoom={18}
           onMoveend={ this.handleMoveend }

      >
        {
          this.state.polygons.map(function(polygon, index) {
            return <Polygon
                    key={index}
                    positions={polygon.coordinates}
                    fillColor={polygon.colour}
                    color="black"
                    opacity={0.6}
                    weight={0.5}
                    fillOpacity={0.6}
                   >
                    <Popup>
                      <span>{polygon.label}</span>
                    </Popup>
                   </Polygon>
          })
        }
        <MarkerClusterGroup maxClusterRadius={this.state.maxClusterRadius} iconCreateFunction={createCustomObservationsClusterIcon}>
          {
            this.state.points.filter(function isObservation(points) {
                return points.label === 'epicollect';
            }).map((point, index) =>

              <FieldObservation 
                        point={ point } 
                        key={ index }
                        onMarkerSelect={ this.props.onMarkerSelect }
                        />
            )
          }
        </MarkerClusterGroup>
          <MarkerClusterGroup maxClusterRadius={this.state.maxClusterRadius} iconCreateFunction={createCustomWellClusterIcon}>
              {
                  this.state.points.filter(function isWell(points) {
                      return points.label === 'wells';
                  }).map((point, index) =>
                      <FieldObservation
                          point={ point }
                          key={ index }
                      />
                  )
              }
      </MarkerClusterGroup>
          <MarkerClusterGroup maxClusterRadius={this.state.maxClusterRadius} iconCreateFunction={createCustomSpringClusterIcon}>
              {
                  this.state.points.filter(function isSpring(points) {
                      return points.label === 'springs';
                  }).map((point, index) =>

                      <FieldObservation
                          point={ point }
                          key={ index }
                      />
                  )
              }
          </MarkerClusterGroup>
        {
          this.state.lines.map((line, index) => {
              return <Polyline
                        key={index}
                        positions={line.coordinates}
                        color={line.colour}
                        opacity={0.6}
                     >
                     </Polyline>
          })
        }
        <TileLayer
          attribution={this.state.attribution}
          url={this.state.tileURL}
        />
        <ScaleControl/>
      </Map>
    );
  }
}


class FieldObservation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.point.id,
      title: props.point.title,
      label: props.point.label,
      point: props.point.point,
      version: props.point.epicollect_version,
      icon: this.getMarkerIcon(props.point.label),
    }
  }

  getMarkerIcon = (label) => {
    if (label === 'epicollect') {
        return SSIFWCmarker
    } else if (label === 'springs') {
        return springsMarker
    } else {
        return wellsMarker
    }
  }

  onSelect = () => {
    if (this.state.label === 'epicollect') {
      this.props.onMarkerSelect(this.state)
    }
  }

  render () {
    return (
        <Marker 
          icon={this.state.icon}
          position={ this.state.point } 
          onClick={ this.onSelect} 
        />
      )
  }
}


export default MapView;





