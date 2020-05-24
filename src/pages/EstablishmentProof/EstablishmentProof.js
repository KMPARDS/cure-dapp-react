import React, { Component } from 'react';
import '../EstablishmentProof/EstablishmentProof.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faHome ,faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EstablishmentProof extends Component {
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
                    <FontAwesomeIcon icon={faGraduationCap} />
                        <div className='identity-container'>
                            <h3 className='identity-heading'>Establishment Proof</h3>
                            <p className='identity-txt'>Demo</p>
                            <textarea className='name-field' type="search" id="gsearch" name="gsearch" placeholder="" />
                            <p className='id-rq-txt'>Please provide your Establishment ownership proof to verify  your profile ,so  thatno one else can get access to your  information.</p>
                            <h4 className='id-sub-txt'>Acceptable Documents:</h4>
                            <p className='identity-txt'>1.Click registration Proof</p>
                            <p className='identity-txt'>2.Documents for waste disposal </p>
                            <p className='identity-txt'>3.Tax Receipt</p>
                            <div className='btn-box'>
                                <button className='id-next-btn'>Finish</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}




export default EstablishmentProof;