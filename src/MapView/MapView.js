import React, { Component } from 'react';
import { Map, TileLayer, ScaleControl, Polygon, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';


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


class MapView extends Component {

  constructor(props) {
  	super(props);
  	this.state = { 
      center: props.center, 
      zoom: props.zoom,
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

  componentWillReceiveProps(props) {
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
  }

  render() {
    return (
      <Map 
          ref={ m => { this.leafletMap = m; }}
          center={ this.state.center } 
          zoom={ this.state.zoom }
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
        {
          this.state.points.map((point, index) => 
            <FieldObservation 
                      point={ point } 
                      key={ index }
                      onMarkerSelect={ this.props.onMarkerSelect }
                      />
          )
        }
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
      icon: this.getMarker(props.point.label),
    }
  }

  getMarker = (label) => {
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





