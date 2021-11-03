import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const DestinationInfo = (props) => {
    const [shortName, setshortName] = useState('');
    // const [info, setInfo] = useState();
    
    
    useEffect(()=>{
        try{
            props.destInf.address_components.forEach((component)=>{
                if(component.types[0]==='country'){
                    setshortName(component.short_name);
                    console.log(component.short_name);
                }
            });
        }
        catch{
            
        }
        const options = {
            method: 'GET',
            url: `https://countries-cities.p.rapidapi.com/location/country/${shortName}`,
            headers: {
                'x-rapidapi-host': 'countries-cities.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_CITIES_KEY
            }
        };
        axios.request(options).then(function (response) {
            // setInfo(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    },[props, shortName]);

    return (
        <Container className="my-2">
            <Row>
                <Col md={12} className="border border-dark rounded p-1 mx-auto"  style={{height: window.screen.height*0.6, width: '100%', textAlign: 'center'}}>
                {/* space to show information on the destination, worldbank, recipes information etc */}
                {/* the placees details page where info on the country or location is displayed
                    */}
                    <h3>{props.destInf.formatted_address}</h3>
                    <p id="placesDetails">
                        Currency: 
                        {/* {info.currency.code} */}
                    </p>
                    <p>
                        Population: 
                        {/* {info.population} */}
                    </p>
                    <span>
                        
                    </span>
                </Col>
            </Row>
        </Container>
    )
}

// const styles = {

// }

export default DestinationInfo;