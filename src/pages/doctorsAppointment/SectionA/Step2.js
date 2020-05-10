import React, { Component } from 'react'
import { Container,Row, Col, Dropdown, Button, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import  '../../../App.css';

class Step2 extends Component{
    render(){
        return(
            <div className="stepdiv">
                <Container ClassName="stepcontainer">
                    <Row ClassName="steprow">
                        <Form>
                            <Form.Group>
                                <Form.Label><h2>Education Qualification</h2></Form.Label><br/>
                                <Form.Label>Please enter your base level qualification</Form.Label>
                            </Form.Group>
                            <Form.Group ClassName="step2" controlId="formBasicEmail">
                                <Form.Label>Degree</Form.Label>
                                    <Form.Control placeholder="123" type="text" />
                            </Form.Group>

                            <Form.Group ClassName="step2" controlId="exampleForm.ControlSelect1">
                                <Form.Label>College / Institute</Form.Label>
                                <Form.Control type="text" placeholder="college/institute"/>
                            </Form.Group>
                            <Form.Group ClassName="step2" controlId="exampleForm.ControlGender">
                                <Form.Label>Year of completion</Form.Label>
                                <Form.Control type="text" placeholder="year of completion"/>
                            </Form.Group>
                            <Form.Group ClassName="step2" controlId="exampleForm.ControlCity">
                                <Form.Label>Year of Experience</Form.Label>
                                <Form.Control type="text" placeholder="Year of experience" />
                            </Form.Group>
                            <Button style={{"marginLeft":"89%"}} >
                                <a style={{color:"white"}} href="/step3a">Next</a>
                            </Button>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect()(Step2);