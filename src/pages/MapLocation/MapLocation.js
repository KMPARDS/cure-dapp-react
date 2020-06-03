import React, { Component } from 'react';
import '../MapLocation/MapLocation.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class MapLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <div>
                <Container>
                    <div className='main-container'>
                        <div className='identity-container'>
                            <h3 className='identity-heading'>Map Location</h3>
                            <p className='map-txt'>Mumbai</p>
                            <div className='map-txt'>Phone Number</div>
                            <div className='map-input-field'>
                            <input className='field-txt' type="text" id="fname" name="fname"/>
                            <button className='detail-Edit-btn'>Edit</button>
                            </div>
                            <div className='map-txt'>Email Address</div>
                            <div className='map-input-field'>
                            <input className='fieldone-txt' type="text" id="fname" name="fname"/>
                            
                            </div>
                            <div className='map-txt'>Street Address</div>
                            <div className='map-input-field'>
                            <input className='fieldone-txt' type="text" id="fname" name="fname"/>
                            
                            </div>
                            <div className='map-txt'>Drag n Drop the pin to your location</div>
                            <div className='map-input-field'>
                            <textarea className='name-field' type="text" id="text" name="text" placeholder="" />
                           
                            </div>
                            <div className='btn-box'>
                                <button className='detail-next-btn'>Next</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}




export default MapLocation;