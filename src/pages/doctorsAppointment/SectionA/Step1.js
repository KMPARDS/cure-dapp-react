import React, { Component } from 'react'
import { Container,Row, Col, Dropdown, Button, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import  '../../../App.css';

class Step1 extends Component{
    render(){
        return(
            <div className="stepdiv">
                <Container ClassName="stepcontainer">
                    <Row ClassName="steprow">
                        <Form>
                            <Form.Group>
                                <Form.Label><h2>Section A</h2></Form.Label><br/>
                                <Form.Label>Hello Dr.Rahul! lets build your dedicated profile</Form.Label>
                            </Form.Group>
                            <Form.Group  controlId="formBasicEmail">
                                <Form.Label>Section A: Profile details</Form.Label>
                                    <Row>
                                        <Col ClassName="profile">
                                            <Form.Control placeholder="Dr./Mr/Ms" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Please enter your name" />
                                        </Col>
                                    </Row>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select Specialization</Form.Label>
                                <Form.Control as="select" placeholder="Specialization">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlGender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control as="select" placeholder="Gender">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" />
                            </Form.Group>
                            <Button>
                                <a href="/step2a">Next</a>
                                
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect()(Step1);