import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 10.85,
      lng: 76.27
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={10.850516}
            lng={76.271080}
            text= {<i style = {{color:"red",fontSize:"30px"}} class="fa fa-map-marker" aria-hidden="true">Yombu</i>}
          />
          <AnyReactComponent
            lat={10.830516}
            lng={76.241080}
            text= {<i style = {{color:"red",fontSize:"30px"}} class="fa fa-map-marker" aria-hidden="true">Yombu</i>}
          />
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;