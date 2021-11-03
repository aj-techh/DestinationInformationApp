import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const axios = require('axios');


const DestinationDisplay = (props) => {
    // const [destination, setdestination] = useState('');
    const [destinationLatLngZoom, setDestinationLatLngZoom] = useState([0,0,1])
    // const [placePhotos, setPlacePhotos] = useState('');
    // const [mapView, setmapView] = useState('roadmap');


    
    const setPhotosDisplay = (placeId) => {
      let placesPhoto = {
        method: 'get',
        url:`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,geometry,photos&key=${process.env.REACT_APP_PLACES_API_KEY}`,
        headers:{}
      }
        axios(placesPhoto)
        .then(res=>{
          // console.log(res);
        })
        .catch(err=>{
          // console.log(err)
        })
      }
      
      useEffect(()=>{
        if(props.destInf){
          // console.log('i',props.destInf);
          // setdestination([props.destInf.place_id]);
          // returnPlaceDetails(props.destInf.place_id);
          // const returnPlaceDetails = (placeId) => {
              let config = {
                  method: 'get',
                  url:`https://maps.googleapis.com/maps/api/place/details/json?place_id=${props.destInf.place_id}&fields=name,geometry,photos&key=${process.env.REACT_APP_PLACES_API_KEY}`,
                  headers:{}
              }
          axios(config)
          .then((res)=>{
            // console.log('as');
            let lat = res.data.result.geometry.location.lat;
            let lng = res.data.result.geometry.location.lng;
            setDestinationLatLngZoom([lat,lng, 12])
            const photoRefs = res.data.result.photos;
            let placesPhotoArr =[];
            for(let i of photoRefs){
              // console.log(i.photo_reference);
              placesPhotoArr.push(i.photo_reference)
            } 
            // console.log(placesPhotoArr);
            // setPlacePhotos(placesPhotoArr);
            // document.getElementById('placesDetails').innerHTML = res.data.result.photos[0].html_attributions[0]
          })
          .catch((err)=>{
            console.log(err)
          });
          setPhotosDisplay(props.destInf.place_id);
            }
        // }
      },[props]);


    return(
        <Container className="my-2">
            <Row>
                <Col md={12} className="border border-dark rounded d-grid" style={{height: window.screen.height*0.6, justifyContent: 'center', alignItems: 'center'}}>
                    {/* space to show map and images of destination  */}
                    {/* <span>This is where the embeded google map is going to go</span> */}
                    {/* <span id="map">{destination}</span> */}
                    <iframe
                        // className="mw-100"
                        // title="dispMap"
                        width="100%"
                        height="100%"
                        // frameborder="0" style={{border:'0'}}
                        src={`https://www.google.com/maps/embed/v1/view?key=${process.env.REACT_APP_PLACES_API_KEY}&center=${destinationLatLngZoom[0]},${destinationLatLngZoom[1]}&zoom=${destinationLatLngZoom[2]}`}>
                    </iframe>
                </Col>
            </Row>
        </Container>
    )
}

// const styles = {

// }

export default DestinationDisplay;