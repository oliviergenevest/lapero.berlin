import React , { Component } from "react"
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


export default class MapLeaflet extends Component {
 
constructor() {
    super()
    this.state = {
      lat: 52.50436, 
      lng: 13.47238,
      zoom: 13
    }
  }
 render() {
   
    if (typeof window !== 'undefined') {
    	 const { options } = this.props
   /* console.log(this.props)*/
    const position = [this.props.latitude, this.props.longitude]; 
      return (
        <Map {...options} center={position} zoom={13} >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={position}>
      <Popup>L'Apéro<br />Wine & Cheese</Popup>
    </Marker>
  </Map>
      )
    }
    return null
  }
}




