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
                    latitude: '48.786007',
                    longitude: '-123.437276',
                    radius: 75
                }
                break;
            case 'location1':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Ck inflow E2',
                    latitude: '48.786007',
                    longitude: '-123.437276',
                    radius: 75
                }
                break;
            case 'location2':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Ck Outfall',
                    latitude: '48.770119',
                    longitude: '-123.445071',
                    radius: 75
                }
                break;
            case 'location3':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK Weston Ck outfall',
                    latitude: '48.787567',
                    longitude: '-123.517732',
                    radius: 75
                }
                break;
            case 'location4':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK StreamSong Pond',
                    latitude: '48.77885',
                    longitude: '-123.48142',
                    radius: 25
                }
                break;
            case 'location5':
                location = {
                    area: 'CENTRAL',
                    label: 'MYCK Monty Ck outfall',
                    latitude: '48.759727',
                    longitude: '-123.409329',
                    radius: 75
                }
                break;
            case 'location6':
                location = {
                    area: 'CENTRAL',
                    label: 'CUCK Cusheon Ck Jarads Grove nr bridge',
                    latitude: '48.806447',
                    longitude: '-123.431551',
                    radius: 75
                }
                break;
            case 'location7':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK Meyer Rd Ck by Property Fence',
                    latitude: '48.791033',
                    longitude: '-123.416038',
                    radius: 100
                }
                break;
            case 'location8':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK 222 Meyer Ck 30 m from big cedar',
                    latitude: '48.790901',
                    longitude: '-123.41632',
                    radius: 100
                }
                break;
            case 'location9':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Lk inflow W2',
                    latitude: '48.76981',
                    longitude: '-123.444575',
                    radius: 25
                }
                break;
            case 'location10':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Lk inflow W1',
                    latitude: '48.78136',
                    longitude: '-123.446818',
                    radius: 25
                }
                break;
            case 'location11':
                location = {
                    area: 'CENTRAL',
                    label: 'SWCK Stowell Lk inflow E1',
                    latitude: '48.783368',
                    longitude: '-123.445209',
                    radius: 25
                }
                break;
            case 'location12':
                location = {
                    area: 'CENTRAL',
                    label: '9076 Cusheon Cove Ck at BRDG',
                    latitude: '48.795388',
                    longitude: '-123.397788',
                    radius: 75
                }
                break;
            case 'location13':
                location = {
                    area: 'CENTRAL',
                    label: '9076 Cusheon Cove feeder Ck Bulman Rd at T',
                    latitude: '48.791653',
                    longitude: '-123.408985',
                    radius: 75
                }
                break;
            case 'location14':
                location = {
                    area: 'CENTRAL',
                    label: '9192 E Cypress Ck',
                    latitude: '48.846887',
                    longitude: '-123.503006',
                    radius: 50
                }
                break;
            case 'location15':
                location = {
                    area: 'CENTRAL',
                    label: '9192 W Cypress Ck',
                    latitude: '48.847739',
                    longitude: '-123.503564',
                    radius: 50
                }
                break;
            case 'location16':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK Mereside Ck 1 Weir W of trail',
                    latitude: '48.794305',
                    longitude: '-123.476055',
                    radius: 75
                }
                break;
            case 'location17':
                location = {
                    area: 'CENTRAL',
                    label: 'OLCK Purdy Ck at 570 Beddis Road',
                    latitude: '48.829873',
                    longitude: '-123.472036',
                    radius: 75
                }
                break;
            case 'location18':
                location = {
                    area: 'CENTRAL',
                    label: 'OLCK Old Lowther Ck at sea outfall',
                    latitude: '48.834442',
                    longitude: '-123.470704',
                    radius: 75
                }
                break;
            case 'location19':
                location = {
                    area: 'CENTRAL',
                    label: 'MWCK Mowhinna Ck Beddis Rd CMP',
                    latitude: '48.84017',
                    longitude: '-123.4894',
                    radius: 75
                }
                break;
            case 'location20':
                location = {
                    area: 'CENTRAL',
                    label: 'SHCK Turpel Ck at Rainbow Rd Xing',
                    latitude: '48.856463',
                    longitude: '-123.531999',
                    radius: 75
                }
                break;
            case 'location21':
                location = {
                    area: 'CENTRAL',
                    label: 'SHCK Turpel Ck 5m abv Sharpe Ck 221 Booth',
                    latitude: '48.859669',
                    longitude: '-123.530377',
                    radius: 25
                }
                break;
            case 'location22':
                location = {
                    area: 'CENTRAL',
                    label: 'SHCK Sharpe Ck BLW bridge 221 Booth',
                    latitude: '48.859604',
                    longitude: '-123.530536',
                    radius: 25
                }
                break;
            case 'location23':
                location = {
                    area: 'CENTRAL',
                    label: '9119 Grandmother tree Ck on path',
                    latitude: '48.764843',
                    longitude: '-123.394868',
                    radius: 75
                }
                break;
            case 'location24':
                location = {
                    area: 'NORTH',
                    label: 'MKCK McFadden Ck at RW CMP',
                    latitude: '48.925924',
                    longitude: '-123.55936',
                    radius: 75
                }
                break;
            case 'location25':
                location = {
                    area: 'NORTH',
                    label: 'BLCK Bullock Ck Eagle Ridge Rd',
                    latitude: '48.862126',
                    longitude: '-123.485353',
                    radius: 75
                }
                break;
            case 'location26':
                location = {
                    area: 'NORTH',
                    label: 'MNCK CMP at Robinson Rd',
                    latitude: '48.880866',
                    longitude: '-123.508669',
                    radius: 75
                }
                break;
            case 'location27':
                location = {
                    area: 'NORTH',
                    label: 'MNCK above wetlands',
                    latitude: '48.884175',
                    longitude: '-123.515868',
                    radius: 75
                }
                break;
            case 'location28':
                location = {
                    area: 'NORTH',
                    label: 'WSCK Weston Lake Ck Inflow E1',
                    latitude: '48.788028',
                    longitude: '-123.420991',
                    radius: 75
                }
                break;
            case 'location29':
                location = {
                    area: 'NORTH',
                    label: 'WLBK Walkers Brook Site 2',
                    latitude: '48.886972',
                    longitude: '-123.504249',
                    radius: 75
                }
                break;
            case 'location30':
                location = {
                    area: 'NORTH',
                    label: '9178 Hudson Pt Ck Outfall',
                    latitude: '48.917328',
                    longitude: '-123.54324',
                    radius: 75
                }
                break;
            case 'location31':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck Wier',
                    latitude: '48.864489',
                    longitude: '-123.498673',
                    radius: 75
                }
                break;
            case 'location32':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck upper Ganges CMP',
                    latitude: '48.870755',
                    longitude: '-123.517515',
                    radius: 75
                }
                break;
            case 'location33':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck Ram Spring',
                    latitude: '48.867921',
                    longitude: '-123.511868',
                    radius: 75
                }
                break;
            case 'location34':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck Nicks Pond',
                    latitude: '48.871523',
                    longitude: '-123.517506',
                    radius: 75
                }
                break;
            case 'location35':
                location = {
                    area: 'NORTH',
                    label: '2017 Madrona Ck Churchill Trail',
                    latitude: '48.863435',
                    longitude: '-123.497124',
                    radius: 75
                }
                break;
            case 'location36':
                location = {
                    area: 'NORTH',
                    label: '9073 Mt Park Dr Ck junction',
                    latitude: '48.886796',
                    longitude: '-123.572161',
                    radius: 75
                }
                break;
            case 'location37':
                location = {
                    area: 'NORTH',
                    label: '9071 North End Rd Waterslide',
                    latitude: '48.932066',
                    longitude: '-123.57892',
                    radius: 75
                }
                break;
            case 'location38':
                location = {
                    area: 'SOUTH',
                    label: 'GDCK Geralds Ck outfall',
                    latitude: '48.759932',
                    longitude: '-123.451634',
                    radius: 75
                }
                break;
            case 'location39':
                location = {
                    area: 'SOUTH',
                    label: 'FNCK FernCreek CMP outfall',
                    latitude: '48.757833',
                    longitude: '-123.449985',
                    radius: 75
                }
                break;
            case 'location40':
                location = {
                    area: 'SOUTH',
                    label: 'LLCK Larlow Ck outfall aka Grants Corner Ck',
                    latitude: '48.753928',
                    longitude: '-123.443965',
                    radius: 125
                }
                break;
            case 'location41':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL Ruby Alton Ck outfall',
                    latitude: '48.75163',
                    longitude: '-123.442168',
                    radius: 75
                }
                break;
            case 'location42':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Site 2W totem Ck CMP',
                    latitude: '48.787995',
                    longitude: '-123.517422',
                    radius: 43.43
                }
                break;
            case 'location43':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Site 4E totem Ck big CMP Ck N',
                    latitude: '48.787917',
                    longitude: '-123.517458',
                    radius: 28.42
                }
                break;
            case 'location45':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Site 4E totem Ck big CMP Ck S',
                    latitude: '48.78785',
                    longitude: '-123.517436',
                    radius: 25
                }
                break;
            case 'location46':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Lee Ck at CMP and parking RW',
                    latitude: '48.790548',
                    longitude: '-123.505056',
                    radius: 100
                }
                break;
            case 'location47':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Eagle Ck CMP seen at trail trap 9',
                    latitude: '48.790047',
                    longitude: '-123.510743',
                    radius: 50
                }
                break;
            case 'location48':
                location = {
                    area: 'SOUTH',
                    label: 'XWQW Lee Ck Fishtrap 10 site weir',
                    latitude: '48.788832',
                    longitude: '-123.513556',
                    radius: 25
                }
                break;
            case 'location50':
                location = {
                    area: 'SOUTH',
                    label: 'FLCK StreamSong Fulford Ck',
                    latitude: '48.778508',
                    longitude: '-123.481219',
                    radius: 27
                }
                break;
            case 'location51':
                location = {
                    area: 'SOUTH',
                    label: 'FLCK StreamSong Jones Ck',
                    latitude: '48.777596',
                    longitude: '-123.479828',
                    radius: 50
                }
                break;
            case 'location52':
                location = {
                    area: 'SOUTH',
                    label: 'SLCK Soule Ck aka Fulford Ck spur',
                    latitude: '48.771988',
                    longitude: '-123.462698',
                    radius: 75
                }
                break;
            case 'location53':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL 971 Isabella Pt Rd CMP',
                    latitude: '48.729975',
                    longitude: '-123.437131',
                    radius: 100
                }
                break;
            case 'location54':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL Holmes Ck',
                    latitude: '48.732432',
                    longitude: '-123.428808',
                    radius: 75
                }
                break;
            case 'location55':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL Lumley Ck',
                    latitude: '48.731345',
                    longitude: '-123.439287',
                    radius: 750
                }
                break;
            case 'location56':
                location = {
                    area: 'SOUTH',
                    label: '2112 NW Cloud Ck at Canyon Ck',
                    latitude: '48.736769',
                    longitude: '-123.456947',
                    radius: 75
                }
                break;
            case 'location57':
                location = {
                    area: 'SOUTH',
                    label: '2112 NW Cascade Ck abv Mt Rd waterfall',
                    latitude: '48.733665',
                    longitude: '-123.458071',
                    radius: 75
                }
                break;
            case 'location58':
                location = {
                    area: 'SOUTH',
                    label: '2112 Ribbon Ck abv Falls',
                    latitude: '48.728592',
                    longitude: '-123.452059',
                    radius: 75
                }
                break;
            case 'location59':
                location = {
                    area: 'SOUTH',
                    label: '2112 N Canyon Ck 100m U/S Mt Rd',
                    latitude: '48.736127',
                    longitude: '-123.455508',
                    radius: 75
                }
                break;
            case 'location60':
                location = {
                    area: 'SOUTH',
                    label: '2112 S Canyon Ck 200 m U/S from outfall',
                    latitude: '48.736684',
                    longitude: '-123.455457',
                    radius: 75
                }
                break;
            case 'location61':
                location = {
                    area: 'SOUTH',
                    label: '2112 NE Coralroot Ck at Canyon Ck',
                    latitude: '48.736357',
                    longitude: '-123.455425',
                    radius: 75
                }
                break;
            case 'location62':
                location = {
                    area: 'SOUTH',
                    label: '2112 E Cabbage Ck at Canyon Ck',
                    latitude: '48.730533',
                    longitude: '-123.451548',
                    radius: 75
                }
                break;
            case 'location64':
                location = {
                    area: 'SOUTH',
                    label: 'TRCK Mill Farm Ephemeral Creek 2',
                    latitude: '48.758388',
                    longitude: '-123.528811',
                    radius: 10
                }
                break;
            case 'location65':
                location = {
                    area: 'SOUTH',
                    label: 'TRCK Mill Farm Tau Hang Creek area ephemeral creek 1',
                    latitude: '48.756628',
                    longitude: '-123.528234',
                    radius: 10
                }
                break;
           case 'location72':
               location = {
                   area: 'SOUTH',
                   label: '8509 Chutes Ck at Mt Rd',
                   latitude: '48.72605',
                   longitude: '-123.46482',
                   radius: 75
               }
               break;
           case 'location73':
               location = {
                   area: 'SOUTH',
                   label: '8509 Chutes Ck at outfall',
                   latitude: '48.724015',
                   longitude: '-123.457589',
                   radius: 75
               }
               break;
            case 'location66':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK Weston Lake Creek Inflow E1',
                    latitude: '48.788005',
                    longitude: '-123.421094',
                    radius: 75
                }
                break;
            case 'location67':
                            location = {
                                area: 'CENTRAL',
                                label: 'FLCK Ford Lk inflw Garner Ck 500m up Garner Rd',
                                latitude: '48.805856',
                                longitude: '-123.484819',
                                radius: 75
                            }
                            break;
            case 'location68':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK Ford Lk inflw NW1 Ck u/s NW spur',
                    latitude: '48.810246',
                    longitude: '-123.491239',
                    radius: 75
                }
                break;
            case 'location69':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK Ford Lk inflw NW1 Ck Dukes Rd Nr F/G Rd CMP',
                    latitude: '48.8091',
                    longitude: '-123.479239',
                    radius: 75
                }
                break;
            case 'location70':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK Beaver Pd inflw N Ck 1st CMP d/s Kitchen Rd',
                    latitude: '48.805772',
                    longitude: '-123.467919',
                    radius: 75
                }
                break;
            case 'location71':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK Ford Lk Outfall u/s CMP',
                    latitude: '48.795362',
                    longitude: '-123.478446',
                    radius: 75
                }
                break;
            case 'location44':
                location = {
                    area: 'CENTRAL',
                    label: 'XWQW Site 1 bridge Ck XWP',
                    latitude: '48.790177',
                    longitude: '-123.51706',
                    radius: 75
                }
                break;
            case 'location49':
                location = {
                    area: 'SOUTH',
                    label: '9075 Bridge Ck pt III d/s main Barn trail CMP',
                    latitude: '48.790687',
                    longitude: '-123.514588',
                    radius: 10
                }
                break;



            //Starting Well charts here
            //wn = 'wells north' --> this way it is easier to reorder certain submenu's (for now at least..).

            case 'location_wn1':
                location = {
                    area: 'NORTH',
                    label: 'WLBK inland Walkers Hook Rd Deep Well 1',
                    latitude: '48.886674',
                    longitude: '-123.506811',
                    radius: 50
                }
                break;

            case 'location_wn2':
                location = {
                    area: 'NORTH',
                    label: 'MFCK mid North End Rd. Deep well',
                    latitude: '48.91952',
                    longitude: '-123.55993',
                    radius: 50
                }
                break;

            case 'location_wc1':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK 222 Meyer Rd Deep Drill Well',
                    latitude: '48.793476',
                    longitude: '-123.418425',
                    radius: 50
                }
                break;

            case 'location_wc2':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK Meyer Road Dug Well',
                    latitude: '48.792475',
                    longitude: '-123.418219',
                    radius: 50
                }
                break;

            case 'location_wc3':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK 104 Bulman Rd Deep Well',
                    latitude: '48.786111',
                    longitude: '-123.415555',
                    radius: 50
                }
                break;

            case 'location_wc4':
                location = {
                    area: 'CENTRAL',
                    label: 'WSCK 112 Bulman Rd Deep Well',
                    latitude: '48.786666',
                    longitude: '-123.414722',
                    radius: 50
                }
                break;

            case 'location_wc5':
                location = {
                    area: 'CENTRAL',
                    label: 'MYCK Beaver Pt Rd Hall Deep Well',
                    latitude: '48.770438',
                    longitude: '-123.404638',
                    radius: 50
                }
                break;

            case 'location_wc6':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK mid Kitchen Rd Deep Well',
                    latitude: '48.808537',
                    longitude: '-123.473427',
                    radius: 50
                }
                break;

            case 'location_wc7':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK 177 Dukes Road Deep Well',
                    latitude: '48.811987',
                    longitude: '-123.486396',
                    radius: 50
                }
                break;

            case 'location_wc8':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK Streamsong House Well',
                    latitude: '48.779133',
                    longitude: '-123.480451',
                    radius: 50
                }
                break;

            case 'location_wc9':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK 129 Burgoyne Bay Rd. Shallow Well',
                    latitude: '48.78273',
                    longitude: '-123.49776',
                    radius: 50
                }
                break;

            case 'location_wc10':
                location = {
                    area: 'CENTRAL',
                    label: 'SHCK mid Booth Canal Rd Shallow Well',
                    latitude: '48.85970',
                    longitude: '-123.53039',
                    radius: 50
                }
                break;
            case 'location_wc11':
                location = {
                    area: 'CENTRAL',
                    label: '8344 mid Rainbow Rd Deep Well',
                    latitude: '48.864228',
                    longitude: '-123.542523',
                    radius: 50
                }
                break;
            case 'location_wc12':
                location = {
                    area: 'CENTRAL',
                    label: 'FLCK end Garner Rd Deep well',
                    latitude: '48.812601',
                    longitude: '-123.496885',
                    radius: 50
                }
                break;

            case 'location_ws1':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL 971 Isabella Pt Rd well',
                    latitude: '48.737702',
                    longitude: '-123.435616',
                    radius: 50
                }
                break;
            case 'location_ws2':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL Roland Rd Shallow Well',
                    latitude: '48.745076',
                    longitude: '-123.433713',
                    radius: 50
                }
                break;

            case 'location_ws3':
                location = {
                    area: 'SOUTH',
                    label: 'RUAL Lumley Rd Shallow Well',
                    latitude: '48.7366',
                    longitude: '-123.447766',
                    radius: 50
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
                      <span>Charts - Surface</span>
                    </span>
                        }
                    >
                        <SubMenu title={<span><AreaChartOutlined/><span>North</span></span>}>
                            <Menu.Item key={'location37'}>9071 North End Rd Waterslide</Menu.Item>
                            <Menu.Item key={'location36'}>9073 Mt Park Dr Ck junction</Menu.Item>
                            <Menu.Item key={'location30'}>9178 Hudson Pt Ck Outfall</Menu.Item>
                            <Menu.Item key={'location31'}>2017 Madrona Ck Wier</Menu.Item>
                            <Menu.Item key={'location32'}>2017 Madrona Ck upper Ganges CMP</Menu.Item>
                            <Menu.Item key={'location33'}>2017 Madrona Ck Ram Spring</Menu.Item>
                            <Menu.Item key={'location34'}>2017 Madrona Ck Nicks Pond</Menu.Item>
                            <Menu.Item key={'location35'}>2017 Madrona Ck Churchill Trail</Menu.Item>
                            <Menu.Item key={'location25'}>BLCK Bullock Ck Eagle Ridge Rd</Menu.Item>
                            <Menu.Item key={'location24'}>MKCK McFadden Ck at RW CMP</Menu.Item>
                            <Menu.Item key={'location27'}>MNCK above wetlands</Menu.Item>
                            <Menu.Item key={'location26'}>MNCK CMP at Robinson Rd</Menu.Item>
                            <Menu.Item key={'location29'}>WLBK Walkers Brook Site 2</Menu.Item>
                            <Menu.Item key={'location28'}>WSCK Weston Lake Ck Inflow E1</Menu.Item>
                        </SubMenu>

                        <SubMenu title={<span><AreaChartOutlined/><span>Central</span></span>}>
                            <Menu.Item key={'location12'}>9076 Cusheon Cove Ck at BRDG</Menu.Item>
                            <Menu.Item key={'location13'}>9076 Cusheon Cove feeder Ck Bulman Rd at T</Menu.Item>
                            <Menu.Item key={'location23'}>9119 Grandmother tree Ck on path</Menu.Item>
                            <Menu.Item key={'location14'}>9192 E Cypress Ck</Menu.Item>
                            <Menu.Item key={'location15'}>9192 W Cypress Ck</Menu.Item>
                            <Menu.Item key={'location6'}>CUCK Cusheon Ck Jarads Grove nr bridge</Menu.Item>
                            <Menu.Item key={'location16'}>FLCK Mereside Ck 1 Weir W of trail</Menu.Item>
                            <Menu.Item key={'location4'}>FLCK StreamSong Pond</Menu.Item>
                            <Menu.Item key={'location5'}>MYCK Monty Ck outfall</Menu.Item>
                            <Menu.Item key={'location19'}>MWCK Mowhinna Ck Beddis Rd CMP</Menu.Item>
                            <Menu.Item key={'location18'}>OLCK Old Lowther Ck at sea outfall</Menu.Item>
                            <Menu.Item key={'location17'}>OLCK Purdy Ck at 570 Beddis Road</Menu.Item>
                            <Menu.Item key={'location20'}>SHCK Turpel Ck at Rainbow Rd Xing</Menu.Item>
                            <Menu.Item key={'location22'}>SHCK Sharpe Ck BLW bridge 221 Booth</Menu.Item>
                            <Menu.Item key={'location21'}>SHCK Turpel Ck 5m abv Sharpe Ck 221 Booth</Menu.Item>
                            <Menu.Item key={'location1'}>SWCK Stowell Ck inflow E2</Menu.Item>
                            <Menu.Item key={'location2'}>SWCK Stowell Ck Outfall</Menu.Item>
                            <Menu.Item key={'location9'}>SWCK Stowell Lk inflow W2</Menu.Item>
                            <Menu.Item key={'location10'}>SWCK Stowell Lk inflow W1</Menu.Item>
                            <Menu.Item key={'location11'}>SWCK Stowell Lk inflow E1</Menu.Item>
                            <Menu.Item key={'location8'}>WSCK 222 Meyer Ck 30 m from big cedar</Menu.Item>
                            <Menu.Item key={'location7'}>WSCK Meyer Rd Ck by Property Fence</Menu.Item>
                            <Menu.Item key={'location3'}>WSCK Weston Ck outfall</Menu.Item>
                            <Menu.Item key={'location66'}>WSCK Weston Lake Creek Inflow E1</Menu.Item>
                            <Menu.Item key={'location67'}>FLCK Ford Lk inflw Garner Ck 500m up Garner Rd</Menu.Item>
                            <Menu.Item key={'location68'}>FLCK Ford Lk inflw NW1 Ck u/s NW spur</Menu.Item>
                            <Menu.Item key={'location69'}>FLCK Ford Lk inflw NW1 Ck Dukes Rd Nr F/G Rd CMP</Menu.Item>
                            <Menu.Item key={'location70'}>FLCK Beaver Pd inflw N Ck 1st CMP d/s Kitchen Rd</Menu.Item>
                            <Menu.Item key={'location71'}>FLCK Ford Lk Outfall u/s CMP</Menu.Item>
                            <Menu.Item key={'location44'}>XWQW Site 1 bridge Ck XWP</Menu.Item>
                            <Menu.Item key={'location49'}>9075 Bridge Ck pt III d/s main Barn trail CMP</Menu.Item>
                        </SubMenu>

                        <SubMenu title={<span><AreaChartOutlined/><span>South</span></span>}>
                            <Menu.Item key={'location62'}>2112 E Cabbage Ck at Canyon Ck</Menu.Item>
                            <Menu.Item key={'location61'}>2112 NE Coralroot Ck at Canyon Ck</Menu.Item>
                            <Menu.Item key={'location60'}>2112 S Canyon Ck 200 m U/S from outfall</Menu.Item>
                            <Menu.Item key={'location59'}>2112 N Canyon Ck 100m U/S Mt Rd</Menu.Item>
                            <Menu.Item key={'location58'}>2112 Ribbon Ck abv Falls</Menu.Item>
                            <Menu.Item key={'location57'}>2112 NW Cascade Ck abv Mt Rd waterfall</Menu.Item>
                            <Menu.Item key={'location56'}>2112 NW Cloud Ck at Canyon Ck</Menu.Item>
                            <Menu.Item key={'location39'}>FNCK FernCreek CMP outfall</Menu.Item>
                            <Menu.Item key={'location50'}>FLCK StreamSong Fulford Ck</Menu.Item>
                            <Menu.Item key={'location51'}>FLCK StreamSong Jones Ck</Menu.Item>
                            <Menu.Item key={'location38'}>GDCK Geralds Ck outfall</Menu.Item>
                            <Menu.Item key={'location40'}>LLCK Larlow Ck outfall aka Grants Corner Ck</Menu.Item>
                            <Menu.Item key={'location41'}>RUAL Ruby Alton Ck outfall</Menu.Item>
                            <Menu.Item key={'location53'}>RUAL 971 Isabella Pt Rd CMP</Menu.Item>
                            <Menu.Item key={'location54'}>RUAL Holmes Ck</Menu.Item>
                            <Menu.Item key={'location55'}>RUAL Lumley Ck</Menu.Item>
                            <Menu.Item key={'location52'}>SLCK Soule Ck aka Fulford Ck spur</Menu.Item>
                            <Menu.Item key={'location64'}>TRCK Mill Farm Ephemeral Creek 2</Menu.Item>
                            <Menu.Item key={'location65'}>TRCK Mill Farm Tau Hang Creek area ephemeral creek 1</Menu.Item>
                            <Menu.Item key={'location47'}>XWQW Eagle Ck CMP seen at trail trap 9</Menu.Item>
                            <Menu.Item key={'location46'}>XWQW Lee Ck at CMP and parking RW</Menu.Item>
                            <Menu.Item key={'location48'}>XWQW Lee Ck Fishtrap 10 site weir</Menu.Item>
                            <Menu.Item key={'location42'}>XWQW Site 2W totem Ck CMP</Menu.Item>
                            <Menu.Item key={'location43'}>XWQW Site 4E totem Ck big CMP Ck N</Menu.Item>
                            <Menu.Item key={'location45'}>XWQW Site 4E totem Ck big CMP Ck S</Menu.Item>
                            <Menu.Item key={'location72'}>8509 Chutes Ck at Mt Rd</Menu.Item>
                            <Menu.Item key={'location73'}>8509 Chutes Ck at outfall</Menu.Item>
                        </SubMenu>
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
                      <span>Charts - Wells</span>
                    </span>
                        }
                    >
                        <SubMenu title={<span><AreaChartOutlined/><span>North</span></span>}>
                            <Menu.Item key={'location_wn1'}>WLBK inland Walkers Hook Rd Deep Well 1</Menu.Item>
                            <Menu.Item key={'location_wn2'}>MFCK mid North End Rd. Deep well</Menu.Item>

                        </SubMenu>

                        <SubMenu title={<span><AreaChartOutlined/><span>Central</span></span>}>
                            <Menu.Item key={'location_wc1'}>WSCK 222 Meyer Rd Deep Drill Well</Menu.Item>
                            <Menu.Item key={'location_wc2'}>WSCK Meyer Road Dug Well</Menu.Item>
                            <Menu.Item key={'location_wc3'}>WSCK 104 Bulman Rd Deep Well</Menu.Item>
                            <Menu.Item key={'location_wc4'}>WSCK 112 Bulman Rd Deep Well</Menu.Item>
                            <Menu.Item key={'location_wc5'}>MYCK Beaver Pt Rd Hall Deep Well</Menu.Item>
                            <Menu.Item key={'location_wc6'}>FLCK mid Kitchen Rd Deep Well</Menu.Item>
                            <Menu.Item key={'location_wc7'}>FLCK 177 Dukes Road Deep Well </Menu.Item>
                            <Menu.Item key={'location_wc8'}>FLCK Streamsong House Well</Menu.Item>
                            <Menu.Item key={'location_wc9'}>FLCK 129 Burgoyne Bay Rd. Shallow Well</Menu.Item>
                            <Menu.Item key={'location_wc10'}>SHCK mid Booth Canal Rd Shallow Well</Menu.Item>
                            <Menu.Item key={'location_wc11'}>8344 mid Rainbow Rd Deep Well</Menu.Item>
                            <Menu.Item key={'location_wc12'}>FLCK end Garner Rd Deep well</Menu.Item>

                        </SubMenu>

                        <SubMenu title={<span><AreaChartOutlined/><span>South</span></span>}>
                            <Menu.Item key={'location_ws1'}>RUAL 971 Isabella Pt Rd well</Menu.Item>
                            <Menu.Item key={'location_ws2'}>RUAL Roland Rd Shallow Well</Menu.Item>
                            <Menu.Item key={'location_ws3'}>RUAL Lumley Rd Shallow Well</Menu.Item>

                        </SubMenu>

                    </SubMenu>
                </Menu>

            </div>
        )
    }
}

export default LayerMenu;
