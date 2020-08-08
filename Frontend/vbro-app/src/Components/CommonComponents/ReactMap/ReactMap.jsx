import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import  {connect} from "react-redux"
import {getListData} from  "../../../Redux/Listing/action"
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 10.85,
      lng: 76.27
    },
    zoom: 9
  };
 
  render() {
    let {dataListingPage}= this.props
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCcS0j7hDpSs-F4xDi2q6AkTD_sWqECR9M'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {dataListingPage.map(item=><AnyReactComponent
            lat={item.latitude}
            lng={item.longitude}
          text= {<i style = {{color:"red",fontSize:"18px"}} class="fa fa-map-marker" aria-hidden="true">{item.title}</i>}
          />)}
          
           {/* <AnyReactComponent
            lat={59.965419}
            lng={30.357844}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Youfeed</i>}
          /> */}
          {/* <AnyReactComponent
            lat={59.98419}
            lng={30.357844}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Feednation</i>}
          />
          <AnyReactComponent
            lat={59.99419}
            lng={30.247844}
            text= {<i style = {{color:"red",fontSize:"20px"}} class="fa fa-map-marker" aria-hidden="true">Cogilith</i>}
          /> */}
          
        </GoogleMapReact>
      </div>
    );
  }
}


const MapStateToProps = (state) => {
  return {
    dataListingPage: state.list.dataListingPage,
  };
};

export default connect(MapStateToProps,null)(SimpleMap);
 
