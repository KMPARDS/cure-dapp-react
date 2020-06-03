import React, { Component } from 'react';
import '../DoctorDetail/DoctorDetail.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class DoctorDetail extends Component {
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
                            <h3 className='identity-heading'>Details of consultant doctor</h3>
                            <p className='detail-txt'>Mr Rahul</p>
                            <p className='detail-txt'>Consultation fees</p>
                            <textarea className='es-field' type="search" id="gsearch" name="gsearch" placeholder="ES" />
                            <h4 className='id-sub-txt'>Doctor's hours</h4>
                            <div className='first-hr'>
                            <input type="radio" name="radio" id="radio1" className="k-radio" />
                            <p className='detail-txt'>Same as establishment hours </p>
                            </div>
                            <div className='second-hr'>
                            <input type="radio" name="radio" id="radio1" className="k-radio" />
                            <p className='detail-txt'>Different from establishment hours </p>
                           </div>
                           <p className='note-detail-txt'>Note you can add doctors later.</p>
                            <div className='btn-box'>
                                <button className='detail-next-btn'>Finish</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}




export default DoctorDetail;