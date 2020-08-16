import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  render() {
    const { lat, long, title } = this.props.defaultCenter;
    const center = { lat: parseFloat(lat), lng: parseFloat(long) };

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "20vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          center={center}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={lat}
            lng={long}
            text={
              <i
                style={{ color: "red", fontSize: "20px" }}
                class="fa fa-map-marker"
                aria-hidden="true"
              >
                {title}
              </i>
            }
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
