import React, { Component } from 'react';
import '../KYCVerification/KycVerification.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class KycVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };

    }

    render() {


        return (
            <div>
              <Container>
                  <div  className='main-container'>
                  <div className='kyc-container'>
                    <h3 className='kyc-heading'>Profile is under Verification!</h3>
                    <p className='section-txt'>Documents have been submitted for verification it will soon be processed by our team </p>
                    <div className='kyc-detail'>
                        <p className='section-txt'>Section A profile details</p>
                        <p className='sub-txt'>Doctors,basic details, medical registration ,education qualification , establishment detail etc </p>
                        <div className='change-txt'>Change</div>
                        </div>

                        <div className='kyc-detail'>
                        <p className='section-txt'>Section B profile Verifications</p>
                        <p className='sub-txt'>Doctors Identity proof ,registration ,establishment ownership , proof etc</p>
                        <div className='change-txt'>Change</div>
                        </div>

                        <div className='kyc-detail'>
                        <p className='section-txt'>Section C Start getting patients</p>
                        <p className='sub-txt'>Location ,Timings ,fees</p>
                        <div className='change-txt'>Change</div>
                        </div>
                      </div>
                      </div>
                  </Container>
            </div>
        );
    }
}




export default KycVerification;