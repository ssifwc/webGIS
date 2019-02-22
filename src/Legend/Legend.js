import React, { Component } from 'react';

import './Legend.css'


class Legend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      legendItems: props.legendItems
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ legendItems: nextProps.legendItems });
  }


  render () {
    return (
        <div className='legend'>
          <h3>Legend</h3>
          {
            this.state.legendItems.map((legendItem, index) => 
              <span className='legend-item'>
                <p>{legendItem.label}</p>
                <div className='legend-colour-box' style={{'background-color': legendItem.colour}}></div>
              </span>
            )
        }
        </div>
      )
  }
}


export default Legend;
