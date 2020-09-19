import React, {Component} from 'react';
import {Menu, Switch} from 'antd'
import {AreaChartOutlined, AppstoreOutlined, BorderOutlined} from '@ant-design/icons';
import "./layer-menu.css";

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

        this.setState({selectedBasemap: e.key})
        this.state.basemapDidChange(tileURL, attribution)
    }

    selectLocation = (e) => {

        var location = {}

        switch (e.key) {
            default:
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Ck inflow E2',
                    longitude: '48.786007',
                    latitude: '-123.437276',
                    radius: 75
                }
                break;
            case 'location1':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Ck inflow E2',
                    longitude: '48.786007',
                    latitude: '-123.437276',
                    radius: 75
                }
                break;
            case 'location2':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Ck Outfall',
                    longitude: '48.770119',
                    latitude: '-123.445071',
                    radius: 75
                }
                break;
            case 'location3':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK Weston Ck outfall',
                    longitude: '48.787567',
                    latitude: '-123.517732',
                    radius: 75
                }
                break;
            case 'location4':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK StreamSong Pond',
                    longitude: '48.77885',
                    latitude: '-123.48142',
                    radius: 25
                }
                break;
            case 'location5':
                location = {
                    area: 'CENTRAL',
                    label: 'MYCK Monty Ck outfall',
                    longitude: '48.759727',
                    latitude: '-123.409329',
                    radius: 75
                }
                break;
            case 'location6':
                location = {
                    area: 'CENTRAL',
                    label: 'CUCK Cusheon Ck Jarads Grove nr bridge',
                    longitude: '48.806447',
                    latitude: '-123.431551',
                    radius: 75
                }
                break;
            case 'location7':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK Meyer Rd Ck by Property Fence',
                    longitude: '48.791033',
                    latitude: '-123.416038',
                    radius: 100
                }
                break;
            case 'location8':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK 222 Meyer Ck 30 m from big cedar',
                    longitude: '48.790901',
                    latitude: '-123.41632',
                    radius: 100
                }
                break;
            case 'location9':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Lk inflow W2',
                    longitude: '48.76981',
                    latitude: '-123.444575',
                    radius: 25
                }
                break;
            case 'location10':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Lk inflow W1',
                    longitude: '48.78136',
                    latitude: '-123.446818',
                    radius: 25
                }
                break;
            case 'location11':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Lk inflow E1',
                    longitude: '48.783368',
                    latitude: '-123.445209',
                    radius: 25
                }
                break;
            case 'location12':
                location = {
                    area: 'CENTRAL',
                    label: '9076 Cusheon Cove Ck at BRDG',
                    longitude: '48.795388',
                    latitude: '-123.397788',
                    radius: 75
                }
                break;
            case 'location13':
                location = {
                    area: 'CENTRAL',
                    label: '9076 Cusheon Cove feeder Ck Bulman Rd at T',
                    longitude: '48.791653',
                    latitude: '-123.408985',
                    radius: 75
                }
                break;
            case 'location14':
                location = {
                    area: 'CENTRAL',
                    label: '9192 E Cypress Ck',
                    longitude: '48.846887',
                    latitude: '-123.503006',
                    radius: 50
                }
                break;
            case 'location15':
                location = {
                    area: 'CENTRAL',
                    label: '9192 W Cypress Ck',
                    longitude: '48.847739',
                    latitude: '-123.503564',
                    radius: 50
                }
                break;
            case 'location16':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK Mereside Ck 1 Weir W of trail',
                    longitude: '48.794305',
                    latitude: '-123.476055',
                    radius: 75
                }
                break;
            case 'location17':
                location = {
                    area: 'CENTRAL',
                    label: 'OLCK Purdy Ck at 570 Beddis Road',
                    longitude: '48.829873',
                    latitude: '-123.472036',
                    radius: 75
                }
                break;
            case 'location18':
                location = {
                    area: 'CENTRAL',
                    label: 'OLCK Old Lowther Ck at sea outfall',
                    longitude: '48.834442',
                    latitude: '-123.470704',
                    radius: 75
                }
                break;
            case 'location19':
                location = {
                    area: 'CENTRAL',
                    label: 'MWCK Mowhinna Ck Beddis Rd CMP',
                    longitude: '48.84017',
                    latitude: '-123.4894',
                    radius: 75
                }
                break;
            case 'location20':
                location = {
                    area: 'CENTRAL',
                    label: 'SHCK Turpel Ck at Rainbow Rd Xing',
                    longitude: '48.856463',
                    latitude: '-123.531999',
                    radius: 75
                }
                break;
            case 'location21':
                location = {
                    area: 'CENTRAL',
                    label: 'SHCK Turpel Ck 5m abv Sharpe Ck 221 Booth',
                    longitude: '48.859669',
                    latitude: '-123.530377',
                    radius: 25
                }
                break;
            case 'location22':
                location = {
                    area: 'CENTRAL',
                    label: 'SHCK Sharpe Ck BLW bridge 221 Booth',
                    longitude: '48.859604',
                    latitude: '-123.530536',
                    radius: 25
                }
                break;
            case 'location23':
                location = {
                    area: 'CENTRAL',
                    label: '9119 Grandmother tree Ck on path',
                    longitude: '48.764843',
                    latitude: '-123.394868',
                    radius: 75
                }
                break;
            case 'location24':
                location = {
                    area: 'NORTH',
                    label: 'MKCK McFadden Ck at RW CMP',
                    longitude: '48.925924',
                    latitude: '-123.55936',
                    radius: 75
                }
                break;
            case 'location25':
                location = {
                    area: 'NORTH',
                    label: 'BLCK Bullock Ck Eagle Ridge Rd',
                    longitude: '48.862126',
                    latitude: '-123.485353',
                    radius: 75
                }
                break;
            case 'location26':
                location = {
                    area: 'NORTH',
                    label: 'MNCK CMP at Robinson Rd',
                    longitude: '48.880866',
                    latitude: '-123.508669',
                    radius: 75
                }
                break;
            case 'location27':
                location = {
                    area: 'NORTH',
                    label: 'MNCK above wetlands',
                    longitude: '48.884175',
                    latitude: '-123.515868',
                    radius: 75
                }
                break;
            case 'location28':
                location = {
                    area: 'NORTH',
                    label: 'WSCK Weston Lake Ck Inflow E1',
                    longitude: '48.788028',
                    latitude: '-123.420991',
                    radius: 75
                }
                break;
            case 'location29':
                location = {
                    area: 'NORTH',
                    label: 'WLBK Walkers Brook Site 2',
                    longitude: '48.886972',
                    latitude: '-123.504249',
                    radius: 75
                }
                break;
            case 'location30':
                location = {
                    area: 'NORTH',
                    label: '9178 Hudson Pt Ck Outfall',
                    longitude: '48.917328',
                    latitude: '-123.54324',
                    radius: 75
                }
                break;
            case 'location31':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck Wier',
                    longitude: '48.864489',
                    latitude: '-123.498673',
                    radius: 75
                }
                break;
            case 'location32':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck upper Ganges CMP',
                    longitude: '48.870755',
                    latitude: '-123.517515',
                    radius: 75
                }
                break;
            case 'location33':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck Ram Spring',
                    longitude: '48.867921',
                    latitude: '-123.511868',
                    radius: 75
                }
                break;
            case 'location34':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck Nicks Pond',
                    longitude: '48.871523',
                    latitude: '-123.517506',
                    radius: 75
                }
                break;
            case 'location35':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck Churchill Trail',
                    longitude: '48.863435',
                    latitude: '-123.497124',
                    radius: 75
                }
                break;
            case 'location36':
                location = {
                    area: 'NORTH',
                    label: '9073 Mt Park Dr Ck junction',
                    longitude: '48.886796',
                    latitude: '-123.572161',
                    radius: 75
                }
                break;
            case 'location37':
                location = {
                    area: 'NORTH',
                    label: '9071 North End Rd Waterslide',
                    longitude: '48.932066',
                    latitude: '-123.57892',
                    radius: 75
                }
                break;
            case 'location38':
                location = {
                    area: 'SOUTH',
                    label: 'GDCK Geralds Ck outfall',
                    longitude: '48.759932',
                    latitude: '-123.451634',
                    radius: 75
                }
                break;
            case 'location39':
                location = {
                    area: 'SOUTH',
                    label: 'FNCK FernCreek CMP outfall',
                    longitude: '48.757833',
                    latitude: '-123.449985',
                    radius: 75
                }
                break;
            case 'location40':
                location = {
                    area: 'SOUTH',
                    label: 'LLCK Larlow Ck outfall aka Grants Corner Ck',
                    longitude: '48.753928',
                    latitude: '-123.443965',
                    radius: 125
                }
                break;
            case 'location41':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL Ruby Alton Ck outfall',
                    longitude: '48.75163',
                    latitude: '-123.442168',
                    radius: 75
                }
                break;
            case 'location42':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Site 2W totem Ck CMP',
                    longitude: '48.787995',
                    latitude: '-123.517422',
                    radius: 43.43
                }
                break;
            case 'location43':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Site 4E totem Ck big CMP Ck N',
                    longitude: '48.787917',
                    latitude: '-123.517458',
                    radius: 28.42
                }
                break;
            case 'location44':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Site 1 bridge Ck XWP',
                    longitude: '48.790177',
                    latitude: '-123.51706',
                    radius: 25
                }
                break;
            case 'location45':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Site 4E totem Ck big CMP Ck S',
                    longitude: '48.78785',
                    latitude: '-123.517436',
                    radius: 25
                }
                break;
            case 'location46':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Lee Ck at CMP and parking RW',
                    longitude: '48.790548',
                    latitude: '-123.505056',
                    radius: 100
                }
                break;
            case 'location47':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Eagle Ck CMP seen at trail trap 9',
                    longitude: '48.790047',
                    latitude: '-123.510743',
                    radius: 50
                }
                break;
            case 'location48':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Lee Ck Fishtrap 10 site weir',
                    longitude: '48.788832',
                    latitude: '-123.513556',
                    radius: 25
                }
                break;
            case 'location49':
                location = {
                    area: 'SOUTH',
                    label: '9075 Bridge Ck pt III d/s main Barn trail CMP',
                    longitude: '48.790687',
                    latitude: '-123.514588',
                    radius: 10
                }
                break;
            case 'location50':
                location = {
                    area: 'SOUTH',
                    label: 'FLCK StreamSong Fulford Ck',
                    longitude: '48.778508',
                    latitude: '-123.481219',
                    radius: 27
                }
                break;
            case 'location51':
                location = {
                    area: 'SOUTH',
                    label: 'FLCK StreamSong Jones Ck',
                    longitude: '48.777596',
                    latitude: '-123.479828',
                    radius: 50
                }
                break;
            case 'location52':
                location = {
                    area: 'SOUTH',
                    label: 'SLCK Soule Ck aka Fulford Ck spur',
                    longitude: '48.771988',
                    latitude: '-123.462698',
                    radius: 75
                }
                break;
            case 'location53':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL 971 Isabella Pt Rd CMP',
                    longitude: '48.729975',
                    latitude: '-123.437131',
                    radius: 100
                }
                break;
            case 'location54':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL Holmes Ck',
                    longitude: '48.732432',
                    latitude: '-123.428808',
                    radius: 75
                }
                break;
            case 'location55':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL 971 Isabella Pt Rd well',
                    longitude: '48.737939',
                    latitude: '-123.436593',
                    radius: 100
                }
                break;
            case 'location56':
                location = {
                    area: 'SOUTH',
                    label: '2112 W Ribbon Ck at Mt Rd',
                    longitude: '48.73136',
                    latitude: '-123.459551',
                    radius: 75
                }
                break;
            case 'location57':
                location = {
                    area: 'SOUTH',
                    label: '2112 W Ribbon Ck abv falls',
                    longitude: '48.728592',
                    latitude: '-123.452059',
                    radius: 10
                }
                break;
            case 'location58':
                location = {
                    area: 'SOUTH',
                    label: '2112 S Canyon Ck Gorge 2 m D/S Ribbon Falls',
                    longitude: '48.72866',
                    latitude: '-123.451618',
                    radius: 10
                }
                break;
            case 'location59':
                location = {
                    area: 'SOUTH',
                    label: '2112 S Canyon Ck 100 m U/S outfall',
                    longitude: '48.727365',
                    latitude: '-123.450811',
                    radius: 10
                }
                break;
            case 'location60':
                location = {
                    area: 'SOUTH',
                    label: '2112 NW Cascade Ck at Mt Rd',
                    longitude: '48.734322',
                    latitude: '-123.454565',
                    radius: 10
                }
                break;
            case 'location61':
                location = {
                    area: 'SOUTH',
                    label: '2112 NW Cascade Ck abv falls',
                    longitude: '48.733665',
                    latitude: '-123.458071',
                    radius: 10
                }
                break;
            case 'location62':
                location = {
                    area: 'SOUTH',
                    label: '2112 N Canyon Ck U/S Ribbon Falls',
                    longitude: '48.728752',
                    latitude: '-123.45163',
                    radius: 10
                }
                break;
            case 'location63':
                location = {
                    area: 'SOUTH',
                    label: '2112 N Canyon Ck at Mt Rd 10 m U/S  Mtg Cascade Ck',
                    longitude: '48.734322',
                    latitude: '-123.454565',
                    radius: 10
                }
                break;
            case 'location64':
                location = {
                    area: 'SOUTH',
                    label: 'TRCK Mill Farm Ephemeral Creek 2',
                    longitude: '48.758388',
                    latitude: '-123.528811',
                    radius: 10
                }
                break;
            case 'location65':
                location = {
                    area: 'SOUTH',
                    label: 'TRCK Mill Farm Tau Hang Creek area ephemeral creek 1',
                    longitude: '48.756628',
                    latitude: '-123.528234',
                    radius: 10
                }
                break;


        }

        this.setState({selectLocation: e.key})
        this.state.locationSelected(location)
    }

    render() {
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
                            if (layer.menu === 'ssifwcFeatures') {
                                return (
                                    <Menu.Item key={index}>
                          <span style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}>
                            {layer.display}
                              <Switch
                                  style={{"backgroundColor": layer.colour}}
                                  defaultChecked={this.state.toggled[layer.label]}
                                  onChange={layer.onToggle}/>
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
                            if (layer.menu === 'waterEarth') {
                                return (
                                    <Menu.Item
                                        key={index}>
                          <span
                              style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}
                          >
                            {layer.display}
                              <Switch
                                  style={{"backgroundColor": layer.colour}}
                                  defaultChecked={this.state.toggled[layer.label]}
                                  onChange={layer.onToggle}/>
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
                            if (layer.menu === 'admin') {
                                return (
                                    <Menu.Item
                                        key={index}>
                          <span
                              style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between"}}
                          >
                            {layer.display}
                              <Switch
                                  defaultChecked={this.state.toggled[layer.label]}
                                  onChange={layer.onToggle}/>
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
                            <Menu.Item key={'location24'}>MKCK McFadden Ck at RW CMP</Menu.Item>
                            <Menu.Item key={'location25'}>BLCK Bullock Ck Eagle Ridge Rd</Menu.Item>
                            <Menu.Item key={'location26'}>MNCK CMP at Robinson Rd</Menu.Item>
                            <Menu.Item key={'location27'}>MNCK above wetlands</Menu.Item>
                            <Menu.Item key={'location28'}>WSCK Weston Lake Ck Inflow E1</Menu.Item>
                            <Menu.Item key={'location29'}>WLBK Walkers Brook Site 2</Menu.Item>
                            <Menu.Item key={'location30'}>9178 Hudson Pt Ck Outfall</Menu.Item>
                            <Menu.Item key={'location31'}>2017 Madrona Ck Wier</Menu.Item>
                            <Menu.Item key={'location32'}>2017 Madrona Ck upper Ganges CMP</Menu.Item>
                            <Menu.Item key={'location33'}>2017 Madrona Ck Ram Spring</Menu.Item>
                            <Menu.Item key={'location34'}>2017 Madrona Ck Nicks Pond</Menu.Item>
                            <Menu.Item key={'location35'}>2017 Madrona Ck Churchill Trail</Menu.Item>
                            <Menu.Item key={'location36'}>9073 Mt Park Dr Ck junction</Menu.Item>
                            <Menu.Item key={'location37'}>9071 North End Rd Waterslide</Menu.Item>
                        </SubMenu>

                        <SubMenu title={<span><AreaChartOutlined/><span>Central</span></span>}>
                            <Menu.Item key={'location1'}>SWCK Stowell Ck inflow E2</Menu.Item>
                            <Menu.Item key={'location2'}>SWCK Stowell Ck Outfall</Menu.Item>
                            <Menu.Item key={'location3'}>WSCK Weston Ck outfall</Menu.Item>
                            <Menu.Item key={'location4'}>FLCK StreamSong Pond</Menu.Item>
                            <Menu.Item key={'location5'}>MYCK Monty Ck outfall</Menu.Item>
                            <Menu.Item key={'location6'}>CUCK Cusheon Ck Jarads Grove nr bridge</Menu.Item>
                            <Menu.Item key={'location7'}>WSCK Meyer Rd Ck by Property Fence</Menu.Item>
                            <Menu.Item key={'location8'}>WSCK 222 Meyer Ck 30 m from big cedar</Menu.Item>
                            <Menu.Item key={'location9'}>SWCK Stowell Lk inflow W2</Menu.Item>
                            <Menu.Item key={'location10'}>SWCK Stowell Lk inflow W1</Menu.Item>
                            <Menu.Item key={'location11'}>SWCK Stowell Lk inflow E1</Menu.Item>
                            <Menu.Item key={'location12'}>9076 Cusheon Cove Ck at BRDG</Menu.Item>
                            <Menu.Item key={'location13'}>9076 Cusheon Cove feeder Ck Bulman Rd at T</Menu.Item>
                            <Menu.Item key={'location14'}>9192 E Cypress Ck</Menu.Item>
                            <Menu.Item key={'location15'}>9192 W Cypress Ck</Menu.Item>
                            <Menu.Item key={'location16'}>FLCK Mereside Ck 1 Weir W of trail</Menu.Item>
                            <Menu.Item key={'location17'}>OLCK Purdy Ck at 570 Beddis Road</Menu.Item>
                            <Menu.Item key={'location18'}>OLCK Old Lowther Ck at sea outfall</Menu.Item>
                            <Menu.Item key={'location19'}>MWCK Mowhinna Ck Beddis Rd CMP</Menu.Item>
                            <Menu.Item key={'location20'}>SHCK Turpel Ck at Rainbow Rd Xing</Menu.Item>
                            <Menu.Item key={'location21'}>SHCK Turpel Ck 5m abv Sharpe Ck 221 Booth</Menu.Item>
                            <Menu.Item key={'location22'}>SHCK Sharpe Ck BLW bridge 221 Booth</Menu.Item>
                            <Menu.Item key={'location23'}>9119 Grandmother tree Ck on path</Menu.Item>
                        </SubMenu>

                        <SubMenu title={<span><AreaChartOutlined/><span>South</span></span>}>
                            <Menu.Item key={'location38'}>GDCK Geralds Ck outfall</Menu.Item>
                            <Menu.Item key={'location39'}>FNCK FernCreek CMP outfall</Menu.Item>
                            <Menu.Item key={'location40'}>LLCK Larlow Ck outfall aka Grants Corner Ck</Menu.Item>
                            <Menu.Item key={'location41'}>RUAL Ruby Alton Ck outfall</Menu.Item>
                            <Menu.Item key={'location42'}>XWQW Site 2W totem Ck CMP</Menu.Item>
                            <Menu.Item key={'location43'}>XWQW Site 4E totem Ck big CMP Ck N</Menu.Item>
                            <Menu.Item key={'location44'}>XWQW Site 1 bridge Ck XWP</Menu.Item>
                            <Menu.Item key={'location45'}>XWQW Site 4E totem Ck big CMP Ck S</Menu.Item>
                            <Menu.Item key={'location46'}>XWQW Lee Ck at CMP and parking RW</Menu.Item>
                            <Menu.Item key={'location47'}>XWQW Eagle Ck CMP seen at trail trap 9</Menu.Item>
                            <Menu.Item key={'location48'}>XWQW Lee Ck Fishtrap 10 site weir</Menu.Item>
                            <Menu.Item key={'location49'}>9075 Bridge Ck pt III d/s main Barn trail CMP</Menu.Item>
                            <Menu.Item key={'location50'}>FLCK StreamSong Fulford Ck</Menu.Item>
                            <Menu.Item key={'location51'}>FLCK StreamSong Jones Ck</Menu.Item>
                            <Menu.Item key={'location52'}>SLCK Soule Ck aka Fulford Ck spur</Menu.Item>
                            <Menu.Item key={'location53'}>RUAL 971 Isabella Pt Rd CMP</Menu.Item>
                            <Menu.Item key={'location54'}>RUAL Holmes Ck</Menu.Item>
                            <Menu.Item key={'location55'}>RUAL 971 Isabella Pt Rd well</Menu.Item>
                            <Menu.Item key={'location56'}>2112 W Ribbon Ck at Mt Rd</Menu.Item>
                            <Menu.Item key={'location57'}>2112 W Ribbon Ck abv falls</Menu.Item>
                            <Menu.Item key={'location58'}>2112 S Canyon Ck Gorge 2 m D/S Ribbon Falls</Menu.Item>
                            <Menu.Item key={'location59'}>2112 S Canyon Ck 100 m U/S outfall</Menu.Item>
                            <Menu.Item key={'location60'}>2112 NW Cascade Ck at Mt Rd</Menu.Item>
                            <Menu.Item key={'location61'}>2112 NW Cascade Ck abv falls</Menu.Item>
                            <Menu.Item key={'location62'}>2112 N Canyon Ck U/S Ribbon Falls</Menu.Item>
                            <Menu.Item key={'location63'}>2112 N Canyon Ck at Mt Rd 10 m U/S  Mtg Cascade Ck</Menu.Item>
                            <Menu.Item key={'location64'}>TRCK Mill Farm Ephemeral Creek 2</Menu.Item>
                            <Menu.Item key={'location65'}>TRCK Mill Farm Tau Hang Creek area ephemeral creek 1</Menu.Item>
                        </SubMenu>

                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default LayerMenu;
