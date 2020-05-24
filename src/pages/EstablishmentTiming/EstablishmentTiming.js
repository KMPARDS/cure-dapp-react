import React, { Component } from 'react';
import '../EstablishmentTiming/EstablishmentTiming.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class EstablishmentTiming extends Component {
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
                            <h3 className='identity-heading'>Establishment Timings</h3>
                            <div className="time-txt-days">Days</div>
                            <Row>
                                <button className='detail-Edit-btn'>Monday</button>
                                <button className='detail-Edit-btn'>Tuesday</button>
                                <button className='detail-Edit-btn'>Wednesday</button>
                                <button className='detail-Edit-btn'>Thursday</button>
                                <button className='detail-Edit-btn'>Friday</button>
                                <button className='detail-Edit-btn'>Saturday</button>
                            </Row>
                            <div className="time-txt">Section 1</div>
                            <div className="section-one">
                            <input className='fieldone-txt' type="text" id="fname" name="fname" />
                            </div>
                            
                            <div className="time-txt">Section 2</div>
                            <div className="section-one">
                            <input className='fieldone-txt' type="text" id="fname" name="fname" />
                            </div>
                            <div className="color-instr">Add Timings for Remaining Days</div>
                            <div className='btn-box'>
                                <button className='id-next-btn'>Next</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}




export default EstablishmentTiming;