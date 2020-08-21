import React, {useState} from "react";
import { Grid} from 'semantic-ui-react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"

function Map() {
const [selectedLocation, setSelectedLocation] = useState(null)

const locations = {
  park:[
    {
      id: 1, 
      name: "Galleria Food Truck Park",
      address:"2829 Chimney Rock Rd, Houston, TX 77056",
      lat: 29.736540,
      lng: -95.476080
    },
    {
      id: 2,
      name: "Truck Yard Houston",
      address:"2118 Lamar St. Houston, TX 77003",
      lat: 29.750000,
      lng: -95.355900
      },
   
  ]
}
  return (
  <div className="Footer">
      <GoogleMap defaultZoom={10} defaultCenter={{lat: 29.760427, lng: -95.369804}} >
        {locations.park.map(park => (
           <Marker
           key={park.id}
           position={{
             lat: park.lat,
             lng: park.lng
           }}
           onClick={() =>{
             setSelectedLocation(park)
           }}
           />
        ))}
        
      </GoogleMap>
      <div className='LocationInfo'>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <div className="Title">
          <h1>Find Us Here</h1>
        </div>
        <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <Grid reversed='computer' columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <h4>Truck Yard Houston</h4>
              <p>2118 Lamar St.</p>
              <p>Houston, TX 77003</p> 
              <em>Tuesdays, Thursdays, Saturdays</em>
              <p><em>3:00pm - until</em></p>
              </Grid.Column>
            <Grid.Column>
              <h4>Galleria Food Truck Park</h4>
              <p>2829 Chimney Rock Rd</p>
              <p>Houston, TX 77056</p> 
              <em>Mondays, Wednesdays, Fridays</em>
              <p><em>12:00pm - 5:00pm</em></p>
              </Grid.Column>
          </Grid.Row>
          </Grid>
       

      </div>
  </div>
  )
}
const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Footer(){
  return(
    <div style={{width: '70vw', height:'100vh', margin:'auto', marginTop:'35px'}}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCUOBmoMvk4Oj4MkBsEnF7CAyhOvO-2-K0`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}/>
    </div>
  )
}
