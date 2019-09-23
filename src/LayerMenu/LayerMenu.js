import React, { Component } from 'react';
import { Menu, Icon, Switch } from 'antd'

const SubMenu = Menu.SubMenu;


class LayerMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layers: props.layers,
      toggled: props.toggled,
      selectedBasemap: 'streets',
      selectedLocation: null,
      basemapDidChange: props.basemapDidChange,
      locationSelected: props.locationSelected
    }
  }

  selectBasemap = (e) => {

    var tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    var attribution = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'

    switch (e.key) {
        case 'satellite':
            tileURL = "https://api.mapbox.com/styles/v1/mapbox/satellite-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmFybmFieSIsImEiOiJXbFJyQWtFIn0.j7VjwkfjLd1O79VvtlzNfw";
            attribution = '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            break; 
        case 'topography':
            tileURL = "https://api.mapbox.com/styles/v1/mapbox/emerald-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmFybmFieSIsImEiOiJXbFJyQWtFIn0.j7VjwkfjLd1O79VvtlzNfw";
            attribution = '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://swww.openstreetmap.org/copyright">OpenStreetMap</a>'
            break; 
        default:
            tileURL = "https://api.mapbox.com/styles/v1/mapbox/satellite-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmFybmFieSIsImEiOiJXbFJyQWtFIn0.j7VjwkfjLd1O79VvtlzNfw";
            attribution = '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            break; 

    }

    this.setState({ selectedBasemap: e.key })
    this.state.basemapDidChange(tileURL, attribution)
   }

   selectLocation = (e) => {

    var location = {}

    switch (e.key) {
      default:
          location = {label: 'FNCK Ferncreek Outfall', uuid: '9104c8d5-131e-4012-99cb-93b582757f59', radius: 15}
          break;
      case 'location1':
          location = {label: 'FNCK Ferncreek Outfall', uuid: '9104c8d5-131e-4012-99cb-93b582757f59', radius: 15}
          break;
      case 'location2':
          location = {label: 'WSCK Weston Creek', uuid: '2b13eb3f-d0d1-4fab-bb25-438a207616b4', radius: 15}
          break;
      case 'location3':
          location = {label: 'XWQW site 2 W CK near totem culvert', uuid: '70e67ce6-50d4-48ea-a234-1840ad05c335', radius: 43.425}
          break;
      case 'location4':
          location = {label: 'XWQW site 4 E CK near totem big culvert', uuid: 'a42ae885-fcce-4680-a9ff-5c7dd7a627a5', radius: 28.42}
          break;
      case 'location5':
          location = {label: 'XWQW Big bridge south side', uuid: '20763f60-f7ac-4479-abe0-663b60d70dae', radius: 75}
          break;
      case 'location6':
          location = {label: 'FLCK Pond Streamsong', uuid: '042c4d38-e5d0-4c7d-ac3c-12a68be19699', radius: 25}
          break;
      case 'location7':
          location = {label: 'FLCK Fulford Creek at Streamsong foot bridge', uuid: '2e659625-2b2a-4b40-b839-29b34f4898d4', radius: 27}
          break;
      case 'location8':
          location = {label: 'FLCK  Jones (Kyler) Creek adjacent to Streamsong gate', uuid: 'c4a4e9af-313e-4eed-b113-43c485c3cd07', radius: 50}
          break;
      case 'location9':
          location = {label: 'SLCK Soule Creek (Fulford Creek spur)', uuid: '6ae3e4c3-8e6c-4ba8-9cfc-452a4476d4d2', radius: 75}
          break;
      case 'location10':
          location = {label: '8397 Creek 352 Isabella AOI', uuid: 'da18f7b1-10d3-4f10-a521-14337b58aad7', radius: 75}
          break;
      case 'location11':
          location = {label: 'FHWS Gerald’s Creek', uuid: '9530b0c7-22cc-43ca-9fab-15f449164f12', radius: 75}
          break;
      case 'location12':
          location = {label: 'FHWS Ferncreek outfall', uuid: 'f90470eb-2114-4b33-8635-96dd8ce33f92', radius: 75}
          break;
      case 'location13':
          location = {label: 'LRCK Larlow (Geralds Corner) Creek at outfall', uuid: 'a32e1c83-0d72-4762-891a-3130c9d9882f', radius: 125}
          break;
      case 'location14':
          location = {label: '2109 Creek adjacent to 1194 Isabella', uuid: '14629544-b214-4dc8-bab2-89eac4f18190', radius: 75}
          break;
      case 'location15':
          location = {label: '2112 Waterfall-I Tuam gulley at outfall', uuid: '9e2e8398-7492-4082-8fbe-7e2af53a5bd6', radius: 75}
          break;
      case 'location16':
          location = {label: '2112 Waterfall-I Tuam Mountain Road', uuid: '7fec04f1-c84c-4c5e-8266-d5d2b59af089', radius: 75}
          break;
      case 'location17':
          location = {label: 'STCK Stowell Ck', uuid: 'db19cce9-0b5a-4ff1-bb16-07ad3b491406', radius: 80}
          break;
      case 'location18':
          location = {label: 'WSCK Weston Ck', uuid: 'bcb616a0-8d5c-451d-a200-8beed8b8ad58', radius: 75}
          break;
      case 'location19':
          location = {label: 'MYCK Monty Creek outfall', uuid: '4392e2b3-b03a-4c0f-b938-3ecd6fa0cd48', radius: 75}
          break;
      case 'location20':
          location = {label: '9117 Menhinick corner creek', uuid: '11d6acf7-bbfc-4b11-b605-999f473c4d0b', radius: 75}
          break;
      case 'location21':
          location = {label: 'CUCK Cusheon Creek Jarads Grove nr bridge', uuid: '1947ca18-355f-49b5-8ed1-3e203a3cb433', radius: 75}
          break;
      case 'location22':
          location = {label: 'CUCK Blackburn Road Culvert 5', uuid: 'cdce2dfa-8caa-4f97-911d-e270fe9dd8e0', radius: 75}
          break;
      case 'location23':
          location = {label: 'CUCK Blackburn Lake area Culvert 1 Hitchcock 1 2 junction', uuid: '53536569-f4b6-4b38-b0f0-e7e1045a1e07', radius: 75}
          break;
      case 'location24':
          location = {label: 'FLCK Dukes Road #427, creek N side arm', uuid: '50df574e-7b8f-4c6e-8209-d19a92d9b217', radius: 25}
          break;
      case 'location25':
          location = {label: 'DUCK Spur Culvert', uuid: 'b39f1c51-baad-41a1-b9f4-f0ee63f79f41', radius: 75}
          break;
      case 'location26':
          location = {label: 'DUCK Channel Ridge Junction Culvert ', uuid: '239fc417-699d-4871-bc11-3e368c9086b8', radius: 50}
          break;
      case 'location27':
          location = {label: '1983 Mt Park Dr Creek junction', uuid: 'd853cc8d-70af-4526-b35f-271593f497e6', radius: 75}
          break;
      case 'location28':
          location = {label: 'DUCK St Mary’s Lake damp area -I', uuid: '61472820-5727-4811-b838-42fcfa9edc27', radius: 75}
          break;
      case 'location29':
          location = {label: '1996WS Creek streambed', uuid: '04a18e8d-584b-4e8b-9b69-b5888fdaaf2b', radius: 75}
          break;
      case 'location30':
          location = {label: '1983 Creek outlet For North View wetlands', uuid: '86eaa37d-e88f-453b-8761-6573d439951c', radius: 75}
          break;
      case 'location31':
          location = {label: 'MKCK McFadden Creek at roadside', uuid: 'bceb73e4-05ce-4f95-845d-7061f9cf87f4', radius: 75}
          break;
      case 'location32':
          location = {label: 'DUCK creek Epron 341 AOI', uuid: '9fdc9666-6257-4b9a-9930-c41a3faff32f', radius: 75}
          break;
      case 'location33':
          location = {label: 'BLCK Creek culvert at Rob Road', uuid: '1828d8d9-b9cf-4a59-bc11-a41f721db89d', radius: 75}
          break;
      case 'location34':
          location = {label: 'MNCK Mansell road creek Footbridge', uuid: '4c102572-9776-430a-ba16-f398a73aa94f', radius: 75}
          break;
      case 'location35':
          location = {label: 'FHWS Ruby Alton', uuid: '01738f04-0cd2-4231-be6b-5a1e1ebcac5f', radius: 75}
          break;
      case 'location36':
          location = {label: '2019 Ruby Alton Creek at outfall', uuid: 'd3363c80-4509-11e9-9a0e-871037599f82', radius: 75}
          break;
    }

    this.setState({ selectLocation: e.key})
    this.state.locationSelected(location)
   }

  render () {
    return (
          <div>
            <Menu 
              selectable={false} 
              theme="dark" 
              mode="inline">
                <SubMenu 
                  key="1" 
                  title={<span><Icon type="appstore" /><span>SSIFWC & WPS Features</span></span>}>
                  {this.state.layers.map((layer, index) => {
                    if(layer.menu === 'ssifwcFeatures') {
                      return (
                        <Menu.Item 
                          key={ index }> 
                          <span
                            style={{"display": "flex", "align-items": "center", "justify-content": "space-between"}}
                          >
                            {layer.display} 
                            <Switch 
                              defaultChecked={this.state.toggled[layer.label]} 
                              onChange={layer.onToggle} />
                          </span> 
                        </Menu.Item>
                        )
                    }
                })}
                </SubMenu>
            </Menu>


            <Menu 
              selectable={false} 
              theme="dark" 
              mode="inline">
                <SubMenu 
                  key="1" 
                  title={<span><Icon type="appstore" /><span>Water & Earth features</span></span>}>
                  {this.state.layers.map((layer, index) => {
                    if(layer.menu === 'waterEarth') {
                       return (
                        <Menu.Item 
                          key={ index }> 
                          <span
                            style={{"display": "flex", "align-items": "center", "justify-content": "space-between"}}
                          >
                            {layer.display} 
                            <Switch 
                              defaultChecked={this.state.toggled[layer.label]} 
                              onChange={layer.onToggle} />
                          </span> 
                        </Menu.Item>
                        )
                    }
                })}
                </SubMenu>
            </Menu>


            <Menu 
              selectable={false} 
              theme="dark" 
              mode="inline">
                <SubMenu 
                  key="1" 
                  title={<span><Icon type="appstore" /><span>Administrative features</span></span>}>
                  {this.state.layers.map((layer, index) => {
                    if(layer.menu === 'admin') {
                       return (
                        <Menu.Item 
                          key={ index }> 
                          <span
                            style={{"display": "flex", "align-items": "center", "justify-content": "space-between"}}
                          >
                            {layer.display} 
                            <Switch 
                              defaultChecked={this.state.toggled[layer.label]} 
                              onChange={layer.onToggle} />
                          </span> 
                        </Menu.Item>
                        )
                    }
                })}
                </SubMenu>
            </Menu>

            <Menu 
              theme="dark" 
              mode="inline"
              onClick={this.selectBasemap}
              selectedKeys={[this.state.selectedBasemap]}
            >
                <SubMenu 
                  selectable={true} 
                  key="2" 
                  title={
                    <span>
                      <Icon type="border" />
                      <span>Basemap</span>
                    </span>
                  }>
                  <Menu.Item key={'topography'}>Topography</Menu.Item>
                  <Menu.Item key={'streets'}>OpenStreetMap</Menu.Item>
                  <Menu.Item key={'satellite'}>Satellite</Menu.Item>
                </SubMenu>
            </Menu>
            <Menu 
              theme="dark" 
              mode="inline"
              onClick={this.selectLocation}
              selectedKeys={[this.state.selectedLocation]}
            >
                <SubMenu
                  selectable={true}
                  key="3"
                  title={
                    <span>
                      <Icon type="area-chart"/>
                      <span>Charts</span>
                    </span>
                  }
                >
                  <SubMenu title={<span><Icon type="area-chart"/><span>North</span></span>}>  
                    <Menu.Item key={'location30'}>Possibly ocean outlet For North View wetlands</Menu.Item>
                    <Menu.Item key={'location31'}>McFadden Creek</Menu.Item>
                    <Menu.Item key={'location32'}>DCWS Epron 341 creek</Menu.Item>
                    <Menu.Item key={'location33'}>B Cr culvert at Rob. Rd</Menu.Item>
                    <Menu.Item key={'location34'}>MCWS Mansell road creek Footbridge</Menu.Item>
                  </SubMenu>
                  <SubMenu title={<span><Icon type="area-chart"/><span>Central</span></span>}>
                    <Menu.Item key={'location2'}>Weston Creek Outfall</Menu.Item>
                    <Menu.Item key={'location19'}>MYCKWS Monty Creek dam waterfall</Menu.Item>
                    <Menu.Item key={'location20'}>9117WS to-be-named-X creek Bridgman 240 culvert</Menu.Item>
                    <Menu.Item key={'location21'}>CCWS Cusheon (Jarads Grove) Creek 1</Menu.Item>
                    <Menu.Item key={'location22'}>CCWS Blackburn Road Culvert 5</Menu.Item>
                    <Menu.Item key={'location23'}>CCWS Blackburn Lake area Culvert 1 Hitchcock  1 2 junction</Menu.Item>
                    <Menu.Item key={'location24'}>Dukes Road #427, creek N side arm</Menu.Item>
                    <Menu.Item key={'location25'}>DCWS Spur Culvert</Menu.Item>
                    <Menu.Item key={'location26'}>CH/Rdg Junction Culvert</Menu.Item>
                    <Menu.Item key={'location27'}>1983WS Mt Park Dr Creek junction</Menu.Item>
                    <Menu.Item key={'location28'}>DCWS St Mary’s Lake damp area -I</Menu.Item>
                    <Menu.Item key={'location29'}>1996WS ?? Creek streambed</Menu.Item>
                  </SubMenu>
                  <SubMenu title={<span><Icon type="area-chart"/><span>South</span></span>}>
                    <Menu.Item key={'location3'}>XwWs site 2 W totem culvert</Menu.Item>
                    <Menu.Item key={'location4'}>XwWs site 4 E totem big culvet left</Menu.Item>
                    <Menu.Item key={'location5'}>Big bridge/ burgoyne bay/south side</Menu.Item>
                    <Menu.Item key={'location6'}>FCWS Fulford Creek 2321 Streamsong Pond</Menu.Item>
                    <Menu.Item key={'location7'}>FCWS Fulford Creek 2321 Streamsong Fulford Creek foot bridge</Menu.Item>
                    <Menu.Item key={'location8'}>FCWS FulfordGanges Road side outside 2321 Streamsong gate</Menu.Item>
                    <Menu.Item key={'location9'}>FHWS Fulford Creek Spur</Menu.Item>
                    <Menu.Item key={'location10'}>FHWS 352 Isabella AOI Creek</Menu.Item>
                    <Menu.Item key={'location11'}>FHWS Gerald’s Creek</Menu.Item>
                    <Menu.Item key={'location12'}>FHWS Ferncreek outfall</Menu.Item>
                    <Menu.Item key={'location13'}>FHWS Grants Corner</Menu.Item>
                    <Menu.Item key={'location14'}>2109WS 1194 Isabella adjacent creek</Menu.Item>
                    <Menu.Item key={'location15'}>2112 WS Tuam waterfall I gulley</Menu.Item>
                    <Menu.Item key={'location16'}>Scouting 2112WS Waterfall1 Mt Drive</Menu.Item>
                    <Menu.Item key={'location17'}>FHWS Stowell Ck</Menu.Item>
                    <Menu.Item key={'location18'}>FHWS Weston Ck</Menu.Item>
                    <Menu.Item key={'location35'}>FHWS Ruby Alton</Menu.Item>
                  </SubMenu>

                </SubMenu>
            </Menu>
          </div>
      )
  }
}


export default LayerMenu;