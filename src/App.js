import React, { Component } from 'react';
import { Layout, Modal, Button } from 'antd'
import PageFooter from './Footer/Footer'
import LayerMenu from './LayerMenu/LayerMenu'
import MapView from './MapView/MapView'
import Legend from './Legend/Legend'
import MarkerPopup from './MarkerPopup/MarkerPopup'
import GraphDrawer from './GraphDrawer/GraphDrawer'
import './App.css'

const { Header, Content, Sider } = Layout;


class App extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			center: [48.820541, -123.439710],
			zoom: 12,
			collapsed: false,
			showPopup: true,
			drawerVisible: false,
			graphsVisible: false,
			selectedPoint: null,
			selectedLocation: null,
			tileURL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
			points: [],
			polygons: [],
			lines: [],
			pointStore: [],
			polygonStore: [],
			lineStore: [],
			legendItems: [],
			layers: [
				{'label': 'epicollect', 'display': 'Field Observations', 'onToggle': this.handleSelectEpicollect, 'colour': '#F5A623', 'menu': 'ssifwcFeatures'},
				{'label': 'watershedsSSIWC', 'display': 'Watershed Group Areas', 'onToggle': this.handleSelectWatersheds, 'colour': '#4A90E2', 'menu': 'ssifwcFeatures'},
				//{'label': 'trails', 'display': 'Trails', 'onToggle': null, 'colour': 'red', 'menu': 'ssifwcFeatures'},
				{'label': 'wells', 'display': 'Water wells (FLNR)', 'onToggle': this.handleSelectWells, 'colour': 'blue', 'menu': 'waterEarth'},
				{'label': 'springs', 'display': 'Licensed springs (FLNR)', 'onToggle': this.handleSelectSprings, 'colour': 'blue', 'menu': 'waterEarth'},
				{'label': 'faults', 'display': 'Faults (Local/Regional)', 'onToggle': this.handleSelectFaults, 'menu': 'waterEarth', 'colours': {
					'Fault': 'blue',
					'Thrust': 'red',
					'Greenwood': 'black'
				}},
				{'label': 'watersheds', 'display': 'Watersheds (CRD)', 'colours': {
					'Arnold Creek': 'blue',
					'McFadden Creek': 'red',
					'Mansell Creek': 'yellow',
					'Dowling Brook': 'green',
					'Duck Creek': 'blue',
					'MacAlpine Brook': 'orange',
					'Direct - Storm': 'green',
					'Unnamed': 'black',
					'Fulford Creek': 'red',
					'Trench Creek': 'yellow',
					'Bullocks Creek': 'orange',
					'Old Lowther Creek': 'green',
					'Okano Creek': 'brown',
					'Diffin Creek': 'pink',
					'Stowell Creek': 'purple',
					'Direct - Natural': 'blue',
					'Ganges Creek': 'yellow',
					'Cusheon Creek': 'orange',
					'Weston Creek': 'green',
					'Sharpe Creek': 'pink',
					'Gerald Creek': 'red',
					'Maxwell Creek': 'yellow',
					'Soule Creek': 'red',
					'Mawhinna Creek': 'green',
					'Walker Creek': 'blue',
					"Xwaaqw'um": 'yellow',
					'Monty Creek': 'purple',
					'Larlow Creek': 'green'
				}, 'onToggle': this.handleSelectWatersheds, 'hasLegend': true, 'filterKey': 'name', 'menu': 'waterEarth'},
				{'label': 'aquifers', 'display': 'Aquifers (Hodge, 1995)', 'colours': {
					'Sand and Gravel': 'brown',
					'Bedrock': 'black'
				}, 'filterKey': 'materials', 'onToggle': this.handleSelectAquifers, 'hasLegend': true, 'menu': 'waterEarth'},
				{'label': 'greenwood', 'display': 'Geology (Greenwood, 2009)', 'colours': {
					'Comox Formation (conglomerate)': '#6baf6a',
					'Cedar District Formation (sandstone & mudstone)': '#a7ff69',
					'Northumberland Formation (mudstone & sandstone)': '#b3f6af',
					'man made': 'green',
					'McLaughlin Ridge Formation (greywacke)': '#ced37d',
					'Extension Formation (pebble & cobble conglomerate)': '#6cffa1',
					'Fourth Lake Formation (black slaty argillite)': '#f3f0c1',
					'Extension Formation (conglomerate)': '#b7de75',
					'McLaughlin Ridge Formation (volcaniclastic sediments)': '#e4ea9b',
					'Geoffrey Formation (sandstone)': '#b1f6af',
					'Nitinat Formation (greenstone)': '#aa935e',
					'Benson Formation (boulder conglomerate)': '#b3e871',
					'Sicker Group (Thin-bedded felsic tuff)': '#e8ea9a',
					'Buttle Lake Group (cherty tuff)': '#f4eeac',
					'Saltspring Intrusions (granite & granodiorite)': '#e87991',
					'Nitinat Formation (pyroxene-phyric mafic agglomerate)': '#d8be81',
					'Geoffrey Formation (conglomerate)': '#66de63',
					'Protection Formation (sandstone)': '#7cca9a',
					'Mount Hall Gabbro Sills (gabbroic sills)': '#e194e2',
					'Saltspring Intrusions (leucocratic granite)': '#f2a1a4',
					'Ganges (Pender) Formation (mudstone)': '#c5ff78',
					'Spray Formation (sandstone-mudstone turbidite & massive mudstone)': '#a1d79f',
					'DeCourcy Formation (sandstone)': '#b1f6af',
					'Haslam Formation (shale & mudstone)': '#66de63'
				}, 'filterKey': 'description', 'onToggle': this.handleSelectGreenwood, 'hasLegend': true, 'menu': 'waterEarth'},
				{'label': 'parcels', 'display': 'Land Owner Status', 'onToggle': this.handleSelectParcels, 'colour': '#B8E986', 'menu': 'admin'},
			],
			toggled: {
				'epicollect': true,
				'watersheds': false,
				'aquifers': false,
				'greenwood': false,
				'faults': false,
			}, 
		}
	}

		//return layer.colours[polygon.meta[layer.filterKey]]

	handleSelectEpicollect = () => {
		const layer = this.getLayerByName('epicollect')

		this.handleToggleLayer(layer);

		if (this.state.toggled[layer.label]) {
			this.handleRemovePoints(layer)
		} else {
			this.handleLoadPoints(layer)
		}
	}

	handleSelectWells = () => {
		const layer = this.getLayerByName('wells')

		this.handleToggleLayer(layer);

		if (this.state.toggled[layer.label]) {
			this.handleRemovePoints(layer);
		} else {
			this.handleLoadPoints(layer);
		}
	}

	handleSelectGreenwood = () => {
		const layer = this.getLayerByName('greenwood')

		this.handleToggleLayer(layer);

		if (this.state.toggled[layer.label]) {
			this.handleRemovePolygons(layer);
		} else {
			this.handleLoadPolygons(layer);
		}
	}

	handleSelectParcels = () => {
		const layer = this.getLayerByName('parcels')

		this.handleToggleLayer(layer);

		if (this.state.toggled[layer.label]) {
			this.handleRemovePolygons(layer);
		} else {
			this.handleLoadPolygons(layer);
		}
	}

	handleSelectSprings = () => {
		const layer = this.getLayerByName('springs')

		this.handleToggleLayer(layer);

		if (this.state.toggled[layer.label]) {
			this.handleRemovePoints(layer);
		} else {
			this.handleLoadPoints(layer);
		}
	}

	handleSelectWatersheds = () => {
		const layer = this.getLayerByName('watersheds')

		this.handleToggleLayer(layer);

		if (this.state.toggled[layer.label]) {
			this.handleRemovePolygons(layer)
		} else {
			this.handleLoadPolygons(layer)
		}
	}

	handleSelectAquifers = () => {
		const layer = this.getLayerByName('aquifers')

		this.handleToggleLayer(layer);

		if (this.state.toggled[layer.label]) {
			this.handleRemovePolygons(layer)
		} else {
			this.handleLoadPolygons(layer)
		}		
	}

	handleSelectFaults = () => {
		const layer = this.getLayerByName('faults')

		this.handleToggleLayer(layer);

		if (this.state.toggled[layer.label]) {
			this.handleRemoveLines(layer)
		} else {
			this.handleLoadLines(layer)
		}
	}

	getLayerByName = (layerName) => {
		return this.state.layers.find(function(layer) {
		  return layer.label === layerName
		});
	}

	handleToggleLayer = (layer) => {
		let toggled = {...this.state.toggled};
		toggled[layer.label] = !toggled[layer.label];
		this.setState({ toggled });
	}

	handleLoadPoints = (layer) => {

		const savedPoints = this.state.pointStore.filter(function(point) {
				return point.label === layer.label
		});

		if (savedPoints.length > 0) {
			this.setState({points: this.state.points.concat(savedPoints)});
		} else {
			this.loadData(layer.label).then((points) => {
				points.map(point => {
					point.label = layer.label;
					point.colour = layer.colour;
				});
			this.setState({points: this.state.points.concat(points)});
			});
		}
	}

	handleLoadPolygons = (layer) => {

		if (layer.hasLegend) {
			var legendItems = [];
			Object.keys(layer.colours).forEach(label => 
				legendItems.push({layer: layer.label, label: label, colour: layer.colours[label]})
			)
			this.setState({legendItems: this.state.legendItems.concat(legendItems)});
		}

		const savedPolygons = this.state.polygonStore.filter(function(polygon) {
			return polygon.id === layer.label;
		});

		if (savedPolygons.length > 0) {
			this.setState({polygons: this.state.polygons.concat(savedPolygons)});

		} else {
			this.loadData(layer.label).then((polygons) => {
				polygons.map(polygon => {
					if (layer.hasLegend) {
						polygon.id = layer.label
						polygon.label = polygon.meta[layer.filterKey]
						polygon.colour = layer.colours[polygon.meta[layer.filterKey]]
					} else {
						polygon.id = layer.label;
						polygon.label = layer.label;
						polygon.colour = layer.colour;
					}
				});
				this.setState({polygons: this.state.polygons.concat(polygons)});
			});
		}
	}

	handleLoadLines = (layer) => {

		const savedLines = this.state.lineStore.filter(function(line) {
			return line.id === layer.label;
		});

		if (savedLines.length > 0) {
			this.setState({lines: this.state.lines.concat(savedLines)});
		} else {
			this.loadData(layer.label).then((lines) => {
				lines.map(line => {
					line.id = layer.label;
					line.label = layer.label;
					line.colour = layer.colours[line.name];
				});
				this.setState({lines: this.state.lines.concat(lines)});
			});
		}
	}

	handleRemovePolygons = (layer) => {

		if (layer.hasLegend) {
			this.setState({legendItems: this.state.legendItems.filter(function(item) {
				return item.layer !== layer.label
			})})
		}

		const polygonStore = this.state.polygonStore.filter(function(polygon) {
			return polygon.id !== layer.label;
		});

		const removePolygons = this.state.polygons.filter(function(polygon) {
			return polygon.id === layer.label;
		})
		this.setState({polygonStore: removePolygons.concat(polygonStore)});

		const polygons = this.state.polygons.filter(function(polygon) {
			return polygon.id !== layer.label;
		});
		this.setState({polygons: polygons});
	}

	handleRemovePoints = (layer) => {

		const pointStore = this.state.pointStore.filter(function(point) {
			return point.label !== layer.label;
		});

		const removePoints = this.state.points.filter(function(point) {
			return point.label === layer.label;
		});
		this.setState({pointStore: removePoints.concat(pointStore)})

		const keepPoints = this.state.points.filter(function(point) {
			return point.label !== layer.label;
		});
		this.setState({points: keepPoints});
	}

	handleRemoveLines = (layer) => {

		const lineStore = this.state.lineStore.filter(function(line) {
			return line.label !== layer.label;
		});

		const removeLines = this.state.lines.filter(function(line) {
			return line.label === layer.label;
		});
		this.setState({lineStore: removeLines.concat(lineStore)})

		const keepLines = this.state.lines.filter(function(line) {
			return line.label !== layer.label;
		});
		this.setState({lines: keepLines});
	}

	loadData(resource) {
		return fetch("https://m0mgf48bn4.execute-api.us-east-1.amazonaws.com/dev/" + resource).then(function(response) {
			return response.json();
		}).then(function(json) {
			return json;
		});
	}

	onCollapse = (collapsed) => {
	    this.setState({ collapsed });
	  }

	showModal = () => {
	    this.setState({
	      showPopup: true,
	    });
	  }

  	handleOk = (e) => {
	    this.setState({
	      showPopup: false,
	    });
	 }

	 onDrawerClose = () => {
	 	this.setState({
	 		drawerVisible: false
	 	});
	 };

	 showDrawer = (point) => {
	 	this.setState({
	 		drawerVisible: true,
	 		selectedPoint: point
	 	});
	 };

	 onGraphsClose = () => {
	 	this.setState({
	 		graphsVisible: false
	 	});
	 }

	 basemapDidChange = (tileURL, attribution) => {
	 	this.setState({
	      tileURL: tileURL,
	      attribution: attribution,
	    })
	 };

	 locationSelected = (location) => {

	 	for (var point in this.state.points) {

	 		if (this.state.points[point].id === location.uuid) {
	 			this.setState({
	 				center: this.state.points[point].point,
	 				zoom: 14
	 			})
	 		}
	 	}

	 	this.setState({
	 		graphsVisible: true,
	 		selectedLocation: location
	 	})
	 }

	componentDidMount() {
		var layerName;
		for (layerName in this.state.toggled) {

			if (this.state.toggled[layerName]) {
				const layer = this.getLayerByName(layerName);
				this.handleLoadPoints(layer);
			}
		}
	}

	render() {

		return (
	      <Layout style={{ minHeight: '100vh' }}>

	      	<Sider
		          collapsible
		          width={280}
		          collapsed={this.state.collapsed}
		          onCollapse={this.onCollapse}
		        >
		      <div className="logo" />
		      <LayerMenu 
		          	layers={this.state.layers} 
		          	toggled={this.state.toggled}
		          	basemapDidChange={this.basemapDidChange}
		          	locationSelected={this.locationSelected}
		          />
		    </Sider>

	      	<MarkerPopup
	      		onClose={this.onDrawerClose}
	      		visible={this.state.drawerVisible}
	      		point={this.state.selectedPoint}
	      	/>

	      	<GraphDrawer
	      		onClose={this.onGraphsClose}
	      		visible={this.state.graphsVisible}
	      		location={this.state.selectedLocation}
	      	/>

	        <Modal
	          title="Welcome"
	          visible={this.state.showPopup}
	          onOk={this.handleOk}
	          onCancel={this.handleOk}
	          footer={[null]}
	        >
	          <p>This is home page of the Water Protection Societies (WPS) Salt Spring Island (SSI),  FreshWater Catalogue(FWC) project. 
				This website provides a "pubic facing” view of the freshwater data that has been collected by the SSIFWC project Watershed 
				Stewardship Groups. For further information on the SSIFWC project, or to get involved, please drop an email to 
				<a href="mailto:ssifwc@gmail.com?Subject=Hello" target="_top"> ssifwc@gmail.com</a>.
			  </p>
			  <p>This website was designed and built by Barney Gordon</p>
	        </Modal>

	        <Layout>
		        <Header 
		        	theme="dark" 
		        >
		          	<div className="logo">
		          		<img src="logo-circle.png" alt={''}/>
		          	</div>
		          	<span style={{'display': 'flex', "alignItems": "center", 'flex': '1', 'marginLeft': '100px'}}>
			           	<h1 className="title">SSIFWC</h1>
			           	<h3 className="title" style={{'marginLeft': '50px'}}>Salt Spring Island Freshwater Catalogue</h3>
		           	</span>
		          	<Button type="primary" shape="circle" icon="info" size={'large'} onClick={this.showModal} />
		        </Header>

		        <Content style={{ margin: '10px', display: 'flex' }}>
		            <MapView
		            	center={this.state.center}
		            	zoom={this.state.zoom}
		              	className="map"
		              	polygons={this.state.polygons} 
		              	points={this.state.points} 
		              	lines={this.state.lines}
		              	onMarkerSelect={this.showDrawer}
		              	tileURL= {this.state.tileURL}
	      				attribution= {this.state.attribution}
		            />
		            <img className='north-arrow' src={require('./assets/north-arrow.png')} alt={''} />
		           	<Legend legendItems={this.state.legendItems}/>
		        </Content>
		        <PageFooter/>
			</Layout>
	      </Layout>
		)
	}
}
export default App;




