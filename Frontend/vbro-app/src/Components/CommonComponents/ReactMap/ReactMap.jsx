import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
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
            lat={59.955413}
            lng={30.337844}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Yombu</i>}
          />
           <AnyReactComponent
            lat={59.965419}
            lng={30.357844}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Youfeed</i>}
          />
          <AnyReactComponent
            lat={59.98419}
            lng={30.357844}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Feednation</i>}
          />
          <AnyReactComponent
            lat={59.99419}
            lng={30.247844}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Cogilith</i>}
          />
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;