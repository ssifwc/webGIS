import React, { Component } from 'react';
import { Menu, Switch } from 'antd'
import {AreaChartOutlined,AppstoreOutlined,BorderOutlined} from '@ant-design/icons';

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
            tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
            attribution = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
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
          location = {label: 'XWQW site 2 W CK near totem culvert', uuid: '70e67ce6-50d4-48ea-a234-1840ad05c335', radius: 43.43}
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
          location = {label: 'GRCK Gerald’s Creek at outfall', uuid: '9530b0c7-22cc-43ca-9fab-15f449164f12', radius: 75}
          break;
      case 'location12':
          location = {label: 'FNCK Ferncreek outfall', uuid: 'f90470eb-2114-4b33-8635-96dd8ce33f92', radius: 75}
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
          location = {label: 'STCK Stowell Creek at Fishladder', uuid: 'daa75d780-f7bd-11e9-a507-dd967f37deb4', radius: 80}
          break;
      case 'location18':
          location = {label: 'WSCK Weston Creek at outfall', uuid: 'f28c485c-58d4-4a47-9104-b1f1bb05c77e', radius: 75}
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
   /* case 'location27':
          location = {label: '1983 Mt Park Dr Creek junction', uuid: 'd853cc8d-70af-4526-b35f-271593f497e6', radius: 75}
          break; */
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
   /* case 'location35':
          location = {label: 'FHWS Ruby Alton', uuid: '01738f04-0cd2-4231-be6b-5a1e1ebcac5f', radius: 75}
          break; */
      case 'location36':
          location = {label: 'MNCK culvert at Robinson Rd', uuid: 'fb1d8f7a-b0fd-4b8e-9a76-b14f8219ff75', radius: 75}
          break;
      case 'location37':
          location = {label: 'MNCK above wetlands', uuid: '0489b191-f8cf-49fe-8777-99f91407ea2b', radius: 75}
          break;
      case 'location38':
          location = {label: 'WSCK Weston Creek inflow E 1 Beaverpoint Rd', uuid: '232a84fc-97ea-44e8-b326-2b44c34a4693', radius: 75}
          break;
      case 'location39':
          location = {label: 'OLCK Purdy Creek at 570 Beddis Road', uuid: '4dd87bfa-0439-42dc-9516-01139a6a80a6', radius: 75}
          break;
      case 'location40':
          location = {label: 'XWQM site 1 bridge creek', uuid: 'ccd36a6f-4d82-40db-bbf7-e7d040e23173', radius: 75}
          break;
      case 'location41':
          location = {label: 'WKBK Walkers Brook sea outfall', uuid: 'a97b98bb-a3bf-4133-9706-f85ab2976adb', radius: 75}
          break;
      case 'location42':
          location = {label: '9178 Hudson Point creek sea outfall', uuid: '4ea1fe0c-a977-454a-9113-05263b91b813', radius: 75}
          break;
      case 'location43':
          location = {label: 'SWCK Stowell Lake creek inflow E2', uuid: '1cdb089c-8a4b-48f0-a68f-9d9de125fa39', radius: 75}
          break;
      case 'location44':
          location = {label: '9073 Mt Park Dr Creek nr junction', uuid: 'd853cc8d-70af-4526-b35f-271593f497e6', radius: 75}
          break;
      case 'location45':
          location = {label: '9076 Cusheon Cove creek at bridge', uuid: 'e18d7920-c361-11e9-8cc5-95cebd7d7a52', radius: 75}
          break;
      case 'location46':
          location = {label: '9192 E Cypress Creek', uuid: '9826aa14-218a-466a-bf50-a7a2ed904223', radius: 50}
          break;
      case 'location47':
          location = {label: '9192 W Cypress Creek', uuid: 'aa481a75-0e08-4037-8b95-6efe9b009396', radius: 50}
          break;
      case 'location48':
          location = {label: 'MWCK Beddis Roadside Culvert', uuid: 'c811516a-d9cf-48a2-ab13-853101b337a2', radius: 75}
          break;
      case 'location49':
          location = {label: 'FLCK Fulford Creek feeder @ 7Ravens', uuid: 'db69c9e2-0564-416a-8fa2-762865231016', radius: 75}
          break;
      case 'location50':
          location = {label: 'FLCK Mereside Creek 1 weir W off trail', uuid: '7b789d25-8429-483a-87f5-10760c900792', radius: 75}
          break;
      case 'location51':
          location = {label: 'FLCK Cottonwood Farm site 2 Harris Ck', uuid: '80997efc-f459-4f51-b029-5ce6f3b1f5ed', radius: 110}
          break;
      case 'location52':
          location = {label: '2019 Ruby Alton Creek at outfall', uuid: '7ea0ccf0-8d23-11e9-bf52-67c7725fded3', radius: 75}
          break;
      case 'location53':
          location = {label: '2112 Tuam Waterfall Cr lower site', uuid: '97c96f6b-b852-457a-9dee-321501a8efd1', radius: 75}
          break;
      case 'location54':
          location = {label: '2112 Cable Creek gorge narrows', uuid: 'f59a5d30-54a4-4289-ae2c-ebab324ea5f7', radius: 75}
          break;
      case 'location55':
          location = {label: '2112 Cable Creek gorge (all)', uuid: 'a36e84f0-1234-11ea-bd45-3d9149462f58', radius: 75}
          break;
      case 'location56':
          location = {label: '2112 Cable Creek at Mountain Rd', uuid: '97c96f6b-b852-457a-9dee-321501a8efd1', radius: 50}
          break;
     case 'location57':
          location = {label: 'SWCK Stowell Creek below Lake outfall', uuid: '8aef9597-b748-400b-903e-085e173d7049', radius: 75}
          break;
     case 'location58':
          location = {label: 'RUAL Lumley Creek culvert nr 1171 Isabella Pt Rd', uuid: 'bab71b70-db36-11e9-b067-4f3c37255ba1', radius: 75}
          break;
     case 'location59':
          location = {label: 'RUAL Lumley Creek near mouth', uuid: '9ab8cb30-1235-11ea-bd45-3d9149462f58', radius: 75}
          break;
     case 'location60':
          location = {label: 'RUAL Holmes Rd Creek near 1171 Isabella', uuid: '1fcb80c7-2fa1-4adb-be03-ed53f81fb523', radius: 75}
          break;
     case 'location61':
          location = {label: 'RUAL Summerhill Spring', uuid: '6b485219-b6e9-4a0f-a0e4-6da8c1b61cbd', radius: 75}
          break;
     case 'location62':
          location = {label: 'XWQW Lee Creek in valley low point WW', uuid: '6e48d324-9b52-415e-ae13-0a11c9677197', radius: 75}
          break;
     case 'location63':
          location = {label: 'XWQW Lee Creek at trail near wetland1', uuid: '7104896f-8fd9-428b-8a5b-d844233ea9a6', radius: 75}
          break;
     case 'location64':
          location = {label: 'XWQW Lee Creek at culvert park roadside', uuid: 'cd467724-b820-40b1-a0bc-c43c706c8ce1', radius: 75}
          break;
     case 'location65':
          location = {label: 'WSCK Uplands spring 1', uuid: '36e8a023-ce2d-4c57-861d-4e5223d4aaf6', radius: 75}
          break;
     case 'location66':
          location = {label: 'OLCK Purdy Creek at 570 Beddis Road', uuid: '0b5034eb-b6c3-4c1c-ab37-2a6efb35db57', radius: 75}
          break;
     case 'location67':
          location = {label: 'OLCK Old Lowther Creek at sea outfall', uuid: '596107c6-d731-4154-87ab-9d2e1aea5b38', radius: 75}
          break;
     case 'location68':
          location = {label: 'MWCK Mowhinna Creek Beddis Roadside Culvert', uuid: 'e112d582-4532-47d2-a1ba-cc7ebb6b735b', radius: 75}
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
                  title={<span><AppstoreOutlined/><span>SSIFWC & WPS Features</span></span>}>
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
                  title={<span><AppstoreOutlined/><span>Water & Earth features</span></span>}>
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
                  title={<span><AppstoreOutlined/><span>Administrative features</span></span>}>
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
                      <BorderOutlined/>
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
                      <AreaChartOutlined/>
                      <span>Charts</span>
                    </span>
                  }
                >
                  <SubMenu title={<span><AreaChartOutlined/><span>North</span></span>}>
                    <Menu.Item key={'location25'}>DUCK Spur Culvert</Menu.Item>
                    <Menu.Item key={'location26'}>DUCK Channel Ridge Junction Culvert</Menu.Item>
                    <Menu.Item key={'location28'}>DUCK St Mary’s Lake damp area -I</Menu.Item>
                    <Menu.Item key={'location29'}>1996WS Creek streambed</Menu.Item>
                    <Menu.Item key={'location30'}>1983 Creek outlet For North View wetlands</Menu.Item>
                    <Menu.Item key={'location31'}>MKCK McFadden Creek at roadside</Menu.Item>
                    <Menu.Item key={'location32'}>DUCK creek Epron 341 AOI</Menu.Item>
                    <Menu.Item key={'location33'}>BLCK Creek culvert at Rob Road</Menu.Item>
                    <Menu.Item key={'location34'}>MNCK Mansell road creek Footbridge</Menu.Item>
                    <Menu.Item key={'location36'}>MNCK culvert at Robinson Rd</Menu.Item>
                    <Menu.Item key={'location37'}>MNCK above wetlands</Menu.Item>
                    <Menu.Item key={'location41'}>WKBK Walkers Brook sea outfall</Menu.Item>
                    <Menu.Item key={'location42'}>9178 Hudson Point creek sea outfall</Menu.Item>
                    <Menu.Item key={'location44'}>073 Mt Park Dr Creek junction</Menu.Item>
                  </SubMenu>

                  <SubMenu title={<span><AreaChartOutlined/><span>Central</span></span>}>
                    <Menu.Item key={'location2'}>Weston Creek Outfall</Menu.Item>
                    <Menu.Item key={'location19'}>MYCK Monty Creek outfall</Menu.Item>
                    <Menu.Item key={'location20'}>9117 Menhinick corner creek</Menu.Item>
                    <Menu.Item key={'location21'}>CUCK Cusheon Creek Jarads Grove nr bridge</Menu.Item>
                    <Menu.Item key={'location22'}>CUCK Blackburn Road Culvert 5</Menu.Item>
                    <Menu.Item key={'location23'}>CUCK Blackburn Lake area Culvert 1 Hitchcock 1 2 junction</Menu.Item>
                    <Menu.Item key={'location24'}>FLCK Dukes Road #427, creek N side arm</Menu.Item>
                    <Menu.Item key={'location27'}>1983WS Mt Park Dr Creek junction</Menu.Item>
                    <Menu.Item key={'location39'}>OLCK Purdy Creek at 570 Beddis Road</Menu.Item>
                    <Menu.Item key={'location43'}>SWCK Stowell Lake creek inflow E2 </Menu.Item>
                    <Menu.Item key={'location57'}>SWCK Stowell Creek below Lake outfall</Menu.Item>
                    <Menu.Item key={'location45'}>9076 Cusheon Cove creek at bridge</Menu.Item>
                    <Menu.Item key={'location46'}>9192 E Cypress Creek</Menu.Item>
                    <Menu.Item key={'location47'}>9192 W Cypress Creek</Menu.Item>
                    <Menu.Item key={'location48'}>MWCK Beddis Roadside Culvert</Menu.Item>
                    <Menu.Item key={'location68'}>MWCK Mowhinna Creek Beddis Roadside Culvert</Menu.Item>
                   <Menu.Item key={'location65'}>WSCK Uplands spring 1</Menu.Item>
                    <Menu.Item key={'location66'}>OLCK Purdy Creek at 570 Beddis Road</Menu.Item>
                    <Menu.Item key={'location67'}>OLCK Old Lowther Creek at sea outfall</Menu.Item>
                    <Menu.Item key={'location49'}>FLCK Fulford Creek feeder @ 7Ravens</Menu.Item>
                  </SubMenu>

                  <SubMenu title={<span><AreaChartOutlined/><span>South</span></span>}>
                    <Menu.Item key={'location3'}>XWQW site 2 W Ck near totem culvert</Menu.Item>
                    <Menu.Item key={'location4'}>XWQW site 4 E Ck near totem big culvert</Menu.Item>
                    <Menu.Item key={'location5'}>XWQW big bridge south side</Menu.Item>
                    <Menu.Item key={'location6'}>FLCK Pond Streamsong</Menu.Item>
                    <Menu.Item key={'location7'}>FCWS FLCK Fulford Creek at Streamsong foot bridge</Menu.Item>
                    <Menu.Item key={'location8'}>FLCK Jones (Kyler) Creek adjacent to Streamsong gate</Menu.Item>
                    <Menu.Item key={'location9'}>SLCK Soule Creek (Fulford Creek spur)</Menu.Item>
                    <Menu.Item key={'location10'}>8397 Creek 352 Isabella AOI</Menu.Item>
                    <Menu.Item key={'location11'}>GRCK Geralds Creek at outfall</Menu.Item>
                    <Menu.Item key={'location12'}>FNCK Ferncreek outfall</Menu.Item>
                    <Menu.Item key={'location13'}>LRCK Larlow (Geralds Corner) Creek at outfall</Menu.Item>
                    <Menu.Item key={'location14'}>2109 Creek adjacent to 1194 Isabella</Menu.Item>
                    <Menu.Item key={'location15'}>2112 Waterfall-I Tuam gulley at outfall</Menu.Item>
                    <Menu.Item key={'location16'}>2112 Waterfall-I Tuam Mountain Road</Menu.Item>
                    <Menu.Item key={'location53'}>2112 Tuam Waterfall Cr lower site</Menu.Item>
                    <Menu.Item key={'location54'}>2112 Cable Creek gorge narrows</Menu.Item>
                    <Menu.Item key={'location55'}>2112 Cable Creek gorge (all)</Menu.Item>
                    <Menu.Item key={'location56'}>2112 Cable Creek at Mountain Rd</Menu.Item>
                    <Menu.Item key={'location17'}>STCK Stowell Creek at Fishladder</Menu.Item>
                    <Menu.Item key={'location18'}>WSCK Weston Creek at outfall</Menu.Item>
                    <Menu.Item key={'location35'}>FHWS Ruby Alton</Menu.Item>
                    <Menu.Item key={'location40'}>XWQM site 1 bridge creek</Menu.Item>
                    <Menu.Item key={'location38'}>WSCK Weston Creek inflow E 1 Beaverpoint Rd</Menu.Item>
                    <Menu.Item key={'location50'}>FLCK Mereside Creek 1 weir W off trail</Menu.Item>
                    <Menu.Item key={'location51'}>FLCK Cottonwood Farm site 2 Harris Ck</Menu.Item>
                    <Menu.Item key={'location52'}>2019 Ruby Alton Creek at outfall</Menu.Item>
                    <Menu.Item key={'location58'}>RUAL Lumley Creek culvert nr 1171 Isabella Pt Rd</Menu.Item>
                    <Menu.Item key={'location59'}>RUAL Lumley Creek near mouth</Menu.Item>
                    <Menu.Item key={'location60'}>RUAL Holmes Rd Creek near 1171 Isabella</Menu.Item>
                    <Menu.Item key={'location61'}>RUAL Summerhill Spring</Menu.Item>
                    <Menu.Item key={'location62'}>XWQW Lee Creek in valley low point WW</Menu.Item>
                    <Menu.Item key={'location63'}>XWQW Lee Creek at trail near wetland1</Menu.Item>
                    <Menu.Item key={'location64'}>XWQW Lee Creek at culvert park roadside</Menu.Item>
 
                  </SubMenu>

                </SubMenu>
            </Menu>
          </div>
      )
  }
}


export default LayerMenu;
