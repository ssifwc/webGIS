import React, { Component } from 'react';
import { Drawer, Skeleton, Carousel, Card, Icon } from 'antd'
import Moment from 'react-moment';
import './MarkerPopup.css'

const { Meta } = Card;



class MarkerPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      visible: props.visible,
      title: '',
      waterMatters: '',
      namedLocationIfKnown: '',
      watershed: '',
      createdAt: '',
      lastSignificantPrecipitation: '',
      safeToWork: '',
      nameOrInitials: '',
      typeOfVisit: '',
      waterBodyType: '',
      likelyPermenance: '',
      rateOfFlowQualitative: '',
      flowRateQuantity: '',
      pH: '',
      temperature: '',
      conductivity: '',
      otherComments: '',
      photos: [],
    }
  }

  getData = (point) => {

    this.setState({
      loading: true
    })

    return fetch("https://m0mgf48bn4.execute-api.us-east-1.amazonaws.com/dev/epicollect", {
      method: 'post',
      body: JSON.stringify({
        uuids: [point.id],
        version: point.version
      })
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      return json
    });
  }

  componentWillReceiveProps(props) {

    if (props.visible === true) {
      this.getData(props.point).then((observations) => {

        var photos = []
        for (var photo in observations[0].photos) {

          var photoId = observations[0].photos[photo]

          if (photoId) {
            photos.push(
            {
              url: 'https://s3.amazonaws.com/ssifwc-image-bucket/' + photoId
            }
            )
          }
        };

        this.setState({
          photos: photos,
          loading: false,
          title: props.point.title,
          waterMatters: observations[0].water_matters,
          namedLocationIfKnown: observations[0].named_location_if_known,
          watershed: observations[0].watershed[0],
          createdAt: observations[0].created_at,
          lastSignificantPrecipitation: observations[0].last_significant_precipitation_event,
          safeToWork: observations[0].safe_to_work_at_this_location,
          nameOrInitials: observations[0].name_initials_or_nickname,
          typeOfVisit: observations[0].type_of_visit,
          waterBodyType: observations[0].water_body_type,
          likelyPermenance: observations[0].likely_permenance,
          rateOfFlowQualitative: observations[0].rate_of_flow_qualitative,
          flowRateQuantity: observations[0].flow_rate_average,
          pH: observations[0].ph,
          temperature: observations[0].temperature,
          conductivity: observations[0].conductivity,
          otherComments: observations[0].other_comments,
        });
      });
    }
  }

  render () {

    const items = [
      {label: 'Type of Visit', value: 'typeOfVisit'},
      {label: 'Location', value: 'namedLocationIfKnown'},
      {label: 'Name Initials or Nickname', value: 'nameOrInitials'},
      {label: 'Likely Permenance', value: 'likelyPermenance'},
      {label: 'Name Initials or Nickname', value: 'nameOrInitials'},
      {label: 'Rate of Flow', value: 'rateOfFlowQualitative'},
      {label: 'Safe to Work at this Location', value: 'safeToWork'},
      {label: 'Last Significant Precipitation Event', value: 'lastSignificantPrecipitation'},
      {label: 'Water Matters', value: 'this.state.waterMatters'},
      {label: 'Watershed', value: 'watershed'},
      {label: 'Comments', value: 'otherComments'},
    ]

    return (
        <Drawer
          placement="right"
          closable={true}
          mask={false}
          maskClosable={false}
          onClose={this.props.onClose}
          visible={this.props.visible}
          width={400}
        >

              <Skeleton active loading={this.state.loading}>
                <h2>{this.state.title}</h2>
                <Moment date={this.state.createdAt} format={"DD MMM YYYY  hh:mm a"} />
              </Skeleton>

              <Card>
                  {items.map((item, index) => {
                    return <Skeleton active loading={this.state.loading} key={index}>
                              <span>
                                <p className="card-title"><strong>{item.label}</strong></p>
                                {
                                  this.state[item.value] ? (
                                      <p>{this.state[item.value]}</p>
                                    ) : (
                                      <Icon type="dash" />
                                    )
                                }
                              </span>
                           </Skeleton>
                  })}
              </Card>

            <Card>

                <span>
                  <p className="card-title"><strong>pH</strong></p>
                  {
                    this.state.pH ? (
                        <p>{this.state.pH}</p>
                      ) : (
                        <Icon type="dash" />
                      )
                  }
                </span>

                <span>
                  <p className="card-title"><strong>Temperature</strong></p>
                  <p>{ this.state.temperature }</p>
                </span>
                <span>
                  <p className="card-title"><strong>Conductivity</strong></p>
                  <p>{ this.state.conductivity }</p>
                </span>

                <span>
                  <p className="card-title"><strong>Flow Rate Quantity</strong></p>
                  <p>{ this.state.flowRateQuantity }</p>
                </span>
              </Card>

              <Carousel>
                {
                  this.state.photos.map( (photo, index) =>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt={photo.id} src={photo.url} />}
                    >
                      <Meta
                        title={photo.label}
                      />
                    </Card>
                  )
                }
              </Carousel>

        </Drawer>
      )
  }
}

export default MarkerPopup;


