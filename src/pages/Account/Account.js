import React, { Component } from 'react';
import '../Account/Account.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Account extends Component {
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
                            <h3 className='account-heading'>Account</h3>
                            <div className='top-account-profile'>
                                <div className="profile-img"></div>
                                <div className="ac-flex">
                                <input className='ac-name-field' type="text" id="fname" name="fname" placeholder="Name" />
                                </div>
                            </div>
                            <div className="second-account-profile">
                            <Row>
                                <Col> <input  type="text" id="fname" name="fname" placeholder="Phone no." /></Col>
                                <Col> <input className="sec-ac-name-field" type="text" id="fname" name="fname" placeholder="Email ID" /></Col>
                                <Col> <input  className="sec-ac-name-field"  type="text" id="fname" name="fname" placeholder="Gender" /></Col>
                                <Col> <input className="sec-ac-name-field"   type="text" id="fname" name="fname" placeholder="Date of Birth " /></Col>
                                <Col> <input className="sec-ac-name-field"   type="text" id="fname" name="fname" placeholder="Blood Group" /></Col>
                                <Col> <input  className="sec-ac-name-field"  type="text" id="fname" name="fname" placeholder="Time Zone" /></Col>
                             </Row>
                            
                            </div>
                            <div className="third-account-profile">
                            <Row>
                                <Col> <input className="sec-ac-name-field"   type="text" id="fname" name="fname" placeholder="House No / area / street" /></Col>
                                <Col> <input className="sec-ac-name-field"   type="text" id="fname" name="fname" placeholder="Colony / street / locally" /></Col>
                                <Col> <input className="sec-ac-name-field"  type="text" id="fname" name="fname" placeholder="City" /></Col>
                                <Col> <input className="sec-ac-name-field"    type="text" id="fname" name="fname" placeholder="State" /></Col>
                                <Col> <input className="sec-ac-name-field"   type="text" id="fname" name="fname" placeholder="Country" /></Col>
                                <Col> <input className="sec-ac-name-field"  type="text" id="fname" name="fname" placeholder="Pincode" /></Col>
                             </Row>
                            
                            </div>

                            <div className="third-account-profile">
                            <Row>
                                <Col> <input  type="text" id="fname" name="fname" placeholder="Alternate Phone No." /></Col>
                                <Col> <input  type="text" id="fname" name="fname" placeholder="Language" /></Col>
                             </Row>
                            
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}




export default Account;