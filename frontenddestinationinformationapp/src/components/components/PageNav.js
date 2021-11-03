import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';

const PageNav = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/"><Navbar.Brand>Destination Information</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="navbarLinks"/>
                    <Navbar.Collapse id="navbarLinks">
                        <Autocomplete
                            style={styles.autocomplete}
                            placeholder={`Hi {user}, enter a destination`}
                            type={['(countries)']}
                            onPlaceSelected={(e)=>{props.setDestInf(e)}}
                        />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Row>
                        <Form>
                            <Form.Select>
                                <option disabled>Open this select menu</option>

                            </Form.Select>
                            <Form.Select>

                            </Form.Select>
                            <Form.Select>

                            </Form.Select>
                        </Form>
                    </Row>
                </Container>
            </Navbar> */}
        </>
    )
}

const styles = {
    autocomplete:{
        width: '100%',
        height: '2.5em',
    }
}

export default PageNav;